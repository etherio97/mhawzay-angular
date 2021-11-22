import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req.clone();

    if (this.auth.getToken()) {
      newReq = req.clone({
        headers: req.headers.set(
          "Authorization",
          "Bearer " + this.auth.getToken()
        ),
      });
    }

    return next.handle(newReq);
  }
}
