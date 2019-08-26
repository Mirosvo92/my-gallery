import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AuthorizationComponent,
    LoginComponent
  ],
  imports: [
    AuthorizationRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthorizationModule {
}
