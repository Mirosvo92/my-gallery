import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,
              @Inject('UserService') public userService) {
  }

  goMainPage() {
    this.router.navigate(['system', 'gallery']);
  }

  singOut() {
    this.userService.isUser$.next(false);
    localStorage.removeItem('gallery-user');
    this.router.navigate(['auth', 'login']);
  }

}
