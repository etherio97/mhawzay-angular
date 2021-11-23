import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { ShopsService } from "../shops.service";

let i = 0;
@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
})
export class ShopDetailComponent implements OnInit {
  id!: string;
  shop: any;

  constructor(
    private shops: ShopsService,
    private products: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.reloadData();
    });
  }

  reloadData() {
    this.shops.get(this.id).subscribe((shop) => {
      this.shop = shop;
      if (!this.shop.avatar_url) {
        this.shop.avatar_url = "assets/img/shop.png";
      }
      if (!this.shop.cover_url) {
        this.shop.cover_url = "assets/img/cover.png";
      }
    });
  }
}
