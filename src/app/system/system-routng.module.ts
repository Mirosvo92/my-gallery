import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemGuard} from './system-shared/services/system.guard';
import {SystemComponent} from './system/system.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageEditorComponent} from './gallery/image-editor/image-editor.component';

const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [SystemGuard], children: [
      {path: 'gallery', component: GalleryComponent},
      {path: 'gallery/:id', component: ImageEditorComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}
