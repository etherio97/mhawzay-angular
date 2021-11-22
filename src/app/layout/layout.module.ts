import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AuthGuard } from "src/app/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
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
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class LayoutModule {}
