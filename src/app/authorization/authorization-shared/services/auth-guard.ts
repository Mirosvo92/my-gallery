import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const user: string | undefined = localStorage.getItem('gallery-user');
    if (user) {
      this.router.navigate(['system']);
      return false;
    } else {
      return true;
    }
  }

}
