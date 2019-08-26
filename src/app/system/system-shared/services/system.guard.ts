import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class SystemGuard implements CanActivate {

  constructor( private router: Router, @Inject('UserService') private userService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: string | undefined = localStorage.getItem('gallery-user');
    if (user) {
      return true;
    } else {
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }

}
