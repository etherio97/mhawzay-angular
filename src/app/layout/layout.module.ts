import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { WelcomeComponent } from "src/app/pages/onboarding/welcome/welcome.component";
import { CoverImageComponent } from "src/app/pages/onboarding/components/cover-image/cover-image.component";
import { ProfileAvatarComponent } from "src/app/pages/onboarding/components/profile-avatar/profile-avatar.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: "onboarding/welcome",
        component: WelcomeComponent,
      },
      {
        path: "profile",
        loadChildren: () =>
          import("src/app/pages/profile/profile.module").then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: "shops",
        loadChildren: () =>
          import("src/app/pages/shops/shops.module").then((m) => m.ShopsModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("src/app/pages/account/account.module").then(
            (m) => m.AccountModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    WelcomeComponent,
    CoverImageComponent,
    ProfileAvatarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
