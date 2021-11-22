import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShopsService } from "../shops.service";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
})
export class ShopDetailComponent implements OnInit {
  shop: any;

  constructor(private shops: ShopsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.reloadData(id));
  }

  reloadData(id: string) {
    this.shops.get(id).subscribe((detail: any) => {
      this.shop = detail;
    });
  }
}
