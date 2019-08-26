import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('authForm', {static: true}) form: NgForm;

  constructor(@Inject('UserService') private userService,
              private router: Router,
              private toastrService: ToastrService) {}

  ngOnInit() {}

  singUp(element: HTMLInputElement) {
    element.disabled = true;
    this.userService.createAccount(this.form.value.email, this.form.value.password)
      .then((userData: firebase.auth.UserCredential) => {
        this.authSuccess(new User(userData.user.email, userData.user.uid));
      }).catch(error => {
        this.toastrService.error('error', error.message);
      }).finally(() => {
        element.disabled = false;
      });
  }

  singIn(element: HTMLInputElement) {
    element.disabled = true;
    this.userService.signIn(this.form.value.email, this.form.value.password)
      .then((userData: firebase.auth.UserCredential) => {
        this.authSuccess(new User(userData.user.email, userData.user.uid));
      }).catch(error => {
        this.toastrService.error('error', error.message);
      }).finally(() => {
        element.disabled = false;
      });
  }

  private authSuccess(data: User) {
    this.userService.userData = data;
    localStorage.setItem('gallery-user', JSON.stringify(data));
    this.userService.isUser$.next(true);
    this.router.navigate(['system']);
  }

}
