import { Component, Input, OnInit } from "@angular/core";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
})
export class ProductListComponent implements OnInit {
  @Input() shop_id!: string;
  loading = false;
  products: any[] = [];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.loading = true;
    this.product.list(this.shop_id).subscribe((products: any) => {
      this.loading = false;
      this.products = products.reverse();
    });
  }
}
