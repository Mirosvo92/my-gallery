import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {GalleryImage} from '../../system/system-shared/models/gallery-image.model';

@Injectable()
export class UserService {

  private user: User;
  newImage$ = new Subject<GalleryImage>();
  isUser$ = new BehaviorSubject<boolean>(false);

  get userData(): User {
    return this.user;
  }

  set userData(data: User) {
    this.user = data;
  }

  constructor() {
  }

}
