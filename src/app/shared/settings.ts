import {UserFirebaseService} from './services/user-firebase.service';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {ControlContainer} from '@angular/forms';
import {UserService} from './services/user.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';

export function userApiFactory(fireAuth: AngularFireAuth, fireSt: AngularFireStorage, db: AngularFireDatabase) {
  if (environment.isUseFakeServer) {
    return new UserFirebaseService(fireAuth, fireSt, db);
  } else {
    return new UserService();
  }
}

export function controlContainerFactory(controlContainer?: ControlContainer) {
  return controlContainer;
}

