import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ToastNoAnimationModule} from 'ngx-toastr';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';
import {userApiFactory} from './shared/settings';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ToastNoAnimationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    {
      provide: 'UserService',
      useFactory: userApiFactory,
      deps: [AngularFireAuth, AngularFireStorage, AngularFireDatabase]
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
