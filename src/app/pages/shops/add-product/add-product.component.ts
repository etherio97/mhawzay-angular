import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";
import { ProductService } from "../product.service";

type Status = "DRAFT" | "ACTIVE" | "INACTIVE";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
})
export class AddProductComponent implements OnInit {
  id!: string;
  formGroup!: FormGroup;
  loading = false;
  image: File | null = null;

  constructor(
    private product: ProductService,
    private fb: FormBuilder,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
    });

    this.formGroup = this.fb.group({
      name: ["", [Validators.required]],
      price: ["", [Validators.required, Validators.pattern("[0-9]+")]],
      code: ["", []],
      category: ["", []],
      description: ["", []],
      image_url: ["", []],
      status: ["DRAFT", []],
    });
  }

  uploadImage(file: File | Event) {
    if (!(file instanceof File)) return;
    this.image = file;
  }

  async create() {
    let product = this.formGroup;
    if (!product.valid || this.loading) return;
    this.loading = true;
    if (this.image) {
      let url = await this.storage.upload(this.image);
      product.get("image_url")?.setValue(url);
    }
    product.value.price = parseInt(product.value.price);
    this.product.create(this.id, product.value).subscribe(
      () => this.router.navigate(["/shops", this.id]),
      (e) => alert(e.error?.error)
    );
  }
}
