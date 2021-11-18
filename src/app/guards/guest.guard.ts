import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(): Promise<boolean | UrlTree> {
    return this.authService
      .waitUntilAuth()
      .then((user) => (user ? this.router.createUrlTree(['/']) : true));
  }
}
