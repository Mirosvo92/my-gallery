import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AuthGuard} from './authorization-shared/services/auth-guard';


const routes: Routes = [
  {path: '', component: AuthorizationComponent, canActivate: [AuthGuard], children: [
      {path: 'login', component: LoginComponent}
      ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule {}
