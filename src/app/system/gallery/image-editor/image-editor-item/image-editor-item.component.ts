import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GalleryImage} from '../../../system-shared/models/gallery-image.model';
import {ImageEditorService} from '../../../system-shared/services/image-editor.service';
import {Position} from '../../../system-shared/types/position.type';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {PositionEnum} from '../../../system-shared/enums/position.enum';

@Component({
  selector: 'app-image-editor-item',
  templateUrl: './image-editor-item.component.html',
  styleUrls: ['./image-editor-item.component.scss']
})
export class ImageEditorItemComponent implements OnInit, OnDestroy {

  @Input() imageLink: string;
  @Input() position: {[key in PositionEnum]: string};
  @Input() textTooltip: string;
  @Input() color: string;

  constructor(private imageEditorService: ImageEditorService) {
  }

  ngOnInit() {
    this.positionChanged();
    this.descriptionChanged();
    this.colorChanged();
  }

  ngOnDestroy() {
  }

  private positionChanged() {
    this.imageEditorService.positionChanged$
      .pipe(untilDestroyed(this))
      .subscribe((data: { position: Position, value: string }) => {
        this.position[data.position] = data.value;
        this.position = Object.assign({}, this.position);
      });
  }

  private descriptionChanged() {
    this.imageEditorService.descriptionChanged$
      .pipe(untilDestroyed(this))
      .subscribe((data: {value: string }) => {
        this.textTooltip = data.value;
      });
  }

  private colorChanged() {
    this.imageEditorService.colorChanged$
      .pipe(untilDestroyed(this))
      .subscribe((data: {value: string }) => {
        this.color = data.value;
      });
  }

}
