import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ShopsService } from "./shops.service";

@Component({
  selector: "app-shops",
  templateUrl: "./shops.component.html",
})
export class ShopsComponent implements OnInit {
  loading = true;
  shops: any[] = [];

  constructor(private shopsService: ShopsService) {}

  async ngOnInit() {
    this.shopsService.list().subscribe((shops: any) => {
      this.loading = false;
      this.shops = shops;
    });
  }
}
