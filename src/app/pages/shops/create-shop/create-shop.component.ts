import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { StorageService } from "src/app/services/storage.service";
import { ShopsService } from "../shops.service";

@Component({
  selector: "app-create-shop",
  templateUrl: "./create-shop.component.html",
})
export class CreateShopComponent implements OnInit {
  loading = false;
  categories = [
    "Automotive",
    "Baby & Toddler",
    "Clothing & Shoes",
    "Computers",
    "Electronics",
    "Entertainment & Arts",
    "Food & Gifts",
    "Health & Beauty",
    "Home & Garden",
    "Office & Professional Services",
    "Personal & Home Services",
    "Restaurants & Dining",
    "Software",
    "Sports & Outdoors",
    "Travel",
  ];
  formGroup!: FormGroup;
  files: { [s: string]: File | null } = {
    cover: null,
    avatar: null,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storage: StorageService,
    private shops: ShopsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32),
        ],
      ],
      category: ["", [Validators.required]],
      cover_url: [""],
      avatar_url: [""],
    });
  }

  uploadCover(file: File | Event) {
    if (file instanceof Event) return;
    this.files.cover = file;
  }

  uploadProfile(file: File | Event) {
    if (file instanceof Event) return;
    this.files.avatar = file;
  }

  async create() {
    if (!this.formGroup.valid) {
      return;
    }
    this.loading = true;
    if (this.files.cover) {
      await this.storage.upload(this.files.cover).then((url) => {
        this.formGroup.get("cover_url")?.setValue(url);
      });
    }
    if (this.files.avatar) {
      await this.storage.upload(this.files.avatar).then((url) => {
        this.formGroup.get("avatar_url")?.setValue(url);
      });
    }
    this.shops
      .create(this.formGroup.value)
      .subscribe(() => this.router.navigate(["/shops"]));
  }
}
