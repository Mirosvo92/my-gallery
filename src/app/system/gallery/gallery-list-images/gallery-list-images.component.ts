import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {GalleryImage} from '../../system-shared/models/gallery-image.model';
import {map} from 'rxjs/operators';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-gallery-list-image',
  templateUrl: './gallery-list-images.component.html',
  styleUrls: ['./gallery-list-images.component.scss']
})
export class GalleryListImagesComponent implements OnInit, OnDestroy {

  imagesList$: Observable<GalleryImage[]>;

  constructor(@Inject('UserService') private userService) { }

  ngOnInit() {
    this.getImagesList();
    this.getAddedImage();
  }

  ngOnDestroy() {}

  trackByFn(index) {
    return index;
  }

  private getImagesList() {
    this.imagesList$ = this.userService.getImagesList();
  }

  private getAddedImage() {
    this.userService.newImage$
      .pipe(untilDestroyed(this))
      .subscribe( (image: GalleryImage) => {
      this.imagesList$.pipe( map( list => {
        list.push(image);
        return list;
      }));
    });
  }

}
