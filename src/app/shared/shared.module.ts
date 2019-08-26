import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from '../authorization/authorization-shared/services/auth-guard';
import {SystemGuard} from '../system/system-shared/services/system.guard';
import {InputComponent} from '../authorization/authorization-shared/components/input/input.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {userApiFactory} from './settings';
import {UserService} from './services/user.service';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    SystemGuard
  ],
  declarations: [
    InputComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
