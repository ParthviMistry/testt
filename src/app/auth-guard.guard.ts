import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

import { ApiService } from './api-service.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private apiService: ApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.apiService.isAuthenticate;

    if (user) {
      // authorised so return true
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
