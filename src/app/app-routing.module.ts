import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'system', pathMatch: 'full'},
  {path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule)},
  {path: 'auth', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)},
  {path: '**', redirectTo: 'system', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
