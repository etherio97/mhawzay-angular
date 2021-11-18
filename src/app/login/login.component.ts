import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  error = '';
  inputs!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.inputs = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signIn() {
    if (this.inputs.invalid) return;
    this.authService
      .signInWithEmailAndPassword(
        this.inputs.value.email,
        this.inputs.value.password
      )
      .then(() => this.router.navigate(['/']))
      .catch(this.handleError.bind(this));
  }

  handleError(err: any) {
    this.error = err.code;
  }

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(() => this.router.navigate(['/']))
      .catch(this.handleError.bind(this));
  }

  signInWithFacebook() {
    this.authService
      .signInWithFacebook()
      .then(() => this.router.navigate(['/']))
      .catch(this.handleError.bind(this));
  }
}
