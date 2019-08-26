import {Component, Inject, OnInit} from '@angular/core';
import {User} from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject('UserService') private userService) {}

  ngOnInit() {
    const user: string | undefined = localStorage.getItem('gallery-user');
    if (user) {
      const dataUser: User = JSON.parse(user);
      this.userService.userData = new User(dataUser.email, dataUser.id);
      this.userService.isUser$.next(true);
    } else {
      this.userService.isUser$.next(false);
    }
  }

}
