import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {GalleryImage} from '../../../system-shared/models/gallery-image.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PositionEnum} from '../../../system-shared/enums/position.enum';
import {Position} from '../../../system-shared/types/position.type';
import {ImageEditorService} from '../../../system-shared/services/image-editor.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-image-editor-control',
  templateUrl: './image-editor-control.component.html',
  styleUrls: ['./image-editor-control.component.scss']
})
export class ImageEditorControlComponent implements OnInit, OnDestroy {

  @Input() position: {[key in PositionEnum]: string};
  @Input() textTooltip: string;
  @Input() color: string;
  @Input() imageId: string;
  editForm: FormGroup;
  positionControls = [
    {name: 'top', type: 'number', text: 'top (%)', state: 'top'},
    {name: 'left', type: 'number', text: 'left (%)', state: 'left'}
  ];
  colors = [
    {value: 'red'},
    {value: 'black'},
    {value: 'gray'},
    {value: 'green'},
    {value: 'yellow'}
  ];

  constructor(private formBuilder: FormBuilder,
              @Inject('UserService') private userService,
              private toastrService: ToastrService,
              private router: Router,
              private imageEditorService: ImageEditorService) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      position: this.formBuilder.group({
        top: new FormControl(this.position.top, Validators.required),
        left: new FormControl(this.position.left, Validators.required),
      }),
      description: new FormControl(this.textTooltip, Validators.required),
      color: new FormControl(this.color, Validators.required),
    });
  }

  ngOnDestroy() {
  }

  onPositionChanged(position: Position, value: string) {
    this.imageEditorService.positionChanged$.next({position, value});
  }

  onDescriptionChanged(value: string) {
    this.imageEditorService.descriptionChanged$.next({value});
  }

  onColorChanged(value: string) {
    this.imageEditorService.colorChanged$.next({value});
  }

  save(element: HTMLInputElement) {
    element.disabled = true;
    this.userService.updateImageData(this.imageId, this.editForm.value).then(() => {
      this.toastrService.success('Image data was updated');
    }).catch(error => {
      this.toastrService.error('error', error.message);
    }).finally(() => {
      element.disabled = false;
    });
  }

  delete(element: HTMLInputElement) {
    element.disabled = true;
    this.userService.deleteImage(this.imageId).then(() => {
      this.router.navigate(['system', 'gallery']);
    }).catch(error => {
      this.toastrService.error('error', error.message);
    }).finally(() => {
      element.disabled = false;
    });
  }
}
