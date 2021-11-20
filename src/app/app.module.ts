import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import initializeFirebaseApp from "./firebase.init";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFirebaseApp,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
