import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
})
export class AccountComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signOut(): void {
    this.auth.signOut().then(() => this.router.navigate(["/login"]));
  }
}
