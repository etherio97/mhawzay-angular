import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShopsService } from "./shops.service";

@Component({
  selector: "app-shops",
  templateUrl: "./shops.component.html",
})
export class ShopsComponent implements OnInit {
  loading = true;
  shops: any[] = [];

  constructor(private shopsService: ShopsService, private router: Router) {}

  async ngOnInit() {
    if (this.shopsService.shops.length) {
      this.shops = this.shopsService.shops;
    } else {
      this.reloadData();
    }
  }

  reloadData() {
    this.shopsService.list().subscribe((shops: any) => {
      this.loading = false;
      this.shops = shops;
      this.shopsService.shops = shops;
    });
  }

  viewDetail(data: any) {
    this.router.navigate(["/shops", data.shop_id]);
  }
}
