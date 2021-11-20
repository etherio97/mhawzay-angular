import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { PreloaderService } from "src/app/services/preloader.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  error = "";
  inputs!: FormGroup;

  constructor(
    private preloader: PreloaderService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.inputs = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });

    this.preloader.hide();
  }

  signIn() {
    if (this.inputs.invalid) return;
    this.authService
      .signInWithEmailAndPassword(
        this.inputs.value.email,
        this.inputs.value.password
      )
      .then(() => this.router.navigate(["/account"]))
      .catch(this.handleError.bind(this));
  }

  handleError(err: any) {
    switch (err.code) {
      case "auth/":
        break;
      default:
        this.error = err.message;
    }
  }

  signInWithGoogle() {
    this.preloader.show();
    this.authService
      .signInWithGoogle()
      .then(() => this.router.navigate(["/account"]))
      .then(() => this.preloader.hide())
      .catch(this.handleError.bind(this));
  }

  signInWithFacebook() {
    this.preloader.show();
    this.authService
      .signInWithFacebook()
      .then(() => this.router.navigate(["/account"]))
      .then(() => this.preloader.hide())
      .catch(this.handleError.bind(this));
  }
}
