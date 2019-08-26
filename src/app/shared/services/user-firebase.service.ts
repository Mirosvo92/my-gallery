import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AngularFireUploadTask} from '@angular/fire/storage/task';
import {GalleryImage} from '../../system/system-shared/models/gallery-image.model';
import {database} from 'firebase';
import {filter, map} from 'rxjs/operators';
import {SnapshotAction} from '@angular/fire/database/interfaces';
import {User} from '../models/user.model';


@Injectable()
export class UserFirebaseService {

  private user: User;
  newImage$ = new Subject<GalleryImage>();
  isUser$ = new BehaviorSubject<boolean>(false);

  get userData(): User {
    return this.user;
  }

  set userData(data: User) {
    this.user = data;
  }

  constructor(private firebaseAuth: AngularFireAuth,
              private afStorage: AngularFireStorage,
              private db: AngularFireDatabase) {
  }

  createAccount(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  uploadImage(file, fileName: string): AngularFireUploadTask {
    return this.afStorage.upload(`${this.userData.id}/${fileName}`, file);
  }

  getUrlImg(fileName: string): Observable<any> {
    return this.afStorage.ref(`${this.userData.id}/${fileName}`).getDownloadURL();
  }

  putDataImage(data: GalleryImage): database.ThenableReference {
    return this.db.list(`/my-gallery-5a029/${this.userData.id}`).push(data);
  }

  getImagesList(): Observable<SnapshotAction<GalleryImage>[]> {
    return this.db.list(`/my-gallery-5a029/${this.userData.id}`)
      .snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(s => {
          const image: any = s.payload.val();
          image.id = s.payload.key;
          return image;
        });
      }));
  }

  getImageById(id: string): Observable<SnapshotAction<GalleryImage>> {
    return this.db.object(`/my-gallery-5a029/${this.userData.id}/${id}`)
      .snapshotChanges()
      .pipe(
        filter((snap) => !!snap.payload.val()),
        map(snap => {
          const image: any = snap.payload.val();
          image.id = snap.payload.key;
          return image;
        }));
  }

  updateImageData(id: string, data: GalleryImage): Promise<void> {
    return this.db.list(`/my-gallery-5a029/${this.userData.id}`).update(id, data);
  }

  deleteImage(id: string): Promise<void> {
    return this.db.object(`/my-gallery-5a029/${this.userData.id}/${id}`).remove();
  }

}
