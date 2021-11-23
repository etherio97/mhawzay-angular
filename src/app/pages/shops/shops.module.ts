import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ShopsComponent } from "./shops.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CreateShopComponent } from "./create-shop/create-shop.component";
import { ProfileAvatarComponent } from "./components/profile-avatar/profile-avatar.component";
import { CoverImageComponent } from "./components/cover-image/cover-image.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import { MatTabsModule } from "@angular/material/tabs";
import { ProductListComponent } from "./shop-detail/product-list/product-list.component";
import { ShopSettingsComponent } from "./shop-detail/shop-settings/shop-settings.component";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { AddProductComponent } from "./add-product/add-product.component";
import { RequiredAsteriskComponent } from "src/app/components/required-asterisk/required-asterisk.component";

const routes: Routes = [
  {
    path: "",
    component: ShopsComponent,
  },
  {
    path: "new",
    component: CreateShopComponent,
  },
  {
    path: ":id/new",
    component: AddProductComponent,
  },
  {
    path: ":id",
    component: ShopDetailComponent,
  },
];

@NgModule({
  declarations: [
    ShopsComponent,
    CreateShopComponent,
    ProfileAvatarComponent,
    CoverImageComponent,
    ShopDetailComponent,
    ProductListComponent,
    ShopSettingsComponent,
    AddProductComponent,
    RequiredAsteriskComponent,
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
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatAutocompleteModule,
  ],
  exports: [RouterModule],
})
export class ShopsModule {}
