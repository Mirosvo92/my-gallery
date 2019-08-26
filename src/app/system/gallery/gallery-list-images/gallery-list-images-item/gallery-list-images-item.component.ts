import {Component, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../../../system-shared/models/gallery-image.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery-list-images-item',
  templateUrl: './gallery-list-images-item.component.html',
  styleUrls: ['./gallery-list-images-item.component.scss']
})
export class GalleryListImagesItemComponent {

  @Input() image: GalleryImage;

  constructor(private router: Router) { }

  openImageEditor() {
    this.router.navigate(['system', 'gallery', this.image.id]);
  }

}
