import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-shops",
  templateUrl: "./shops.component.html",
})
export class ShopsComponent implements OnInit {
  shops: any[] = [];

  constructor(
    private authService: AuthService,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    const uid = this.authService.getCurrentUser()?.uid || "";
    this.shopService.list(uid).then((shops) => {
      this.shops = shops;
    });
  }
}
