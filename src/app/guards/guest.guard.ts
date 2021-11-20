import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class GuestGuard implements CanActivate {
  private readonly fallbackUrl = "/account";

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    return (
      !this.authService.getCurrentUser() ||
      this.router.createUrlTree([this.fallbackUrl])
    );
  }
}
