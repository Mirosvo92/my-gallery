import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../authorization/authorization-shared/services/auth-guard';
import {SystemRoutingModule} from './system-routng.module';
import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system/system.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GalleryUploadImageComponent} from './gallery/gallery-upload-image/gallery-upload-image.component';
import {GalleryListImagesComponent} from './gallery/gallery-list-images/gallery-list-images.component';
import { GalleryListImagesItemComponent } from './gallery/gallery-list-images/gallery-list-images-item/gallery-list-images-item.component';
import {TooltipPositionDirective} from './system-shared/directives/tooltip-position.directive';
import { ImageEditorComponent } from './gallery/image-editor/image-editor.component';
import { ImageEditorItemComponent } from './gallery/image-editor/image-editor-item/image-editor-item.component';
import { ImageEditorControlComponent } from './gallery/image-editor/image-editor-control/image-editor-control.component';
import {TooltipComponent} from './system-shared/components/tooltip/tooltip.component';
import { BackButtonComponent } from './system-shared/components/back-button/back-button.component';
import { FirstImageComponent } from './system-shared/components/first-image/first-image.component';


@NgModule({
  declarations: [
    SystemComponent,
    GalleryComponent,
    GalleryUploadImageComponent,
    GalleryListImagesComponent,
    GalleryListImagesItemComponent,
    TooltipPositionDirective,
    ImageEditorComponent,
    ImageEditorItemComponent,
    ImageEditorControlComponent,
    TooltipComponent,
    BackButtonComponent,
    FirstImageComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  providers: [AuthGuard]
})
export class SystemModule {
}
