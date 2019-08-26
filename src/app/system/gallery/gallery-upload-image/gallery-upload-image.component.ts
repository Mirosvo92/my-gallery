import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {GalleryImage} from '../../system-shared/models/gallery-image.model';
import {database} from 'firebase';



@Component({
  selector: 'app-gallery-upload-image',
  templateUrl: './gallery-upload-image.component.html',
  styleUrls: ['./gallery-upload-image.component.scss']
})
export class GalleryUploadImageComponent implements OnInit, OnDestroy {

  constructor(@Inject('UserService') private userService,
              private toastrService: ToastrService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  upload(element: HTMLInputElement) {
    const file = element.files[0];
    if (file && file.name) {
      element.disabled = true;
      this.userService.uploadImage(file, file.name).then(() => {
        this.getImageUrl(file.name);
      }).catch(error => {
        this.toastrService.error('error', error.message);
      }).finally(() => {
        element.disabled = false;
      });
    }
  }

  private getImageUrl(fileName: string) {
    this.userService.getUrlImg(fileName)
      .pipe(untilDestroyed(this))
      .subscribe((url: string) => {
        this.putDataImage(fileName, url);
      }, (error) => {
        this.toastrService.error('error', error.message ? error.message : 'unknown error');
      });
  }

  private putDataImage(imageName: string, link: string) {
    const dataImage = new GalleryImage(link, imageName);
    this.userService.putDataImage(dataImage).then((data: database.ThenableReference) => {
      dataImage.id = data.key;
      this.toastrService.success(`${imageName} was added successfully`);
      this.userService.newImage$.next(dataImage);
    }).catch(error => {
      this.toastrService.error('error', error.message);
    });
  }

}
