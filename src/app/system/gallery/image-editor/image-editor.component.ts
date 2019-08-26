import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryImage} from '../../system-shared/models/gallery-image.model';
import {ImageEditorService} from '../../system-shared/services/image-editor.service';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss'],
  providers: [ImageEditorService]
})
export class ImageEditorComponent implements OnInit {

  image$: GalleryImage;

  constructor(@Inject('UserService') private userService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.image$ = this.userService.getImageById(id);
  }

}
