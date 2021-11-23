import { Component, Input, OnInit } from "@angular/core";
import { ShopsService } from "../../shops.service";

@Component({
  selector: "app-shop-settings",
  templateUrl: "./shop-settings.component.html",
})
export class ShopSettingsComponent implements OnInit {
  @Input() shop: any;

  constructor(private shops: ShopsService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {}
}
