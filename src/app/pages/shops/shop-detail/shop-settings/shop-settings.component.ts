import { Component, OnInit } from "@angular/core";
import { ShopsService } from "../../shops.service";

@Component({
  selector: "app-shop-settings",
  templateUrl: "./shop-settings.component.html",
})
export class ShopSettingsComponent implements OnInit {
  constructor(private shops: ShopsService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {}
}
