import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AuthService } from "src/app/services/auth.service";
import { ShopService } from "src/app/services/shop.service";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
})
export class WelcomeComponent implements OnInit {
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

  asyncTasks: boolean[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private storage: StorageService,
    private shop: ShopService
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
      uid: [this.auth.getCurrentUser()?.uid, [Validators.required]],
      coverImage: [""],
      profileImage: [""],
    });
  }

  uploadCover(file: File) {
    let filename = `public/${moment().format("YYYY/MM")}`;
    this.asyncTasks.push(true);
    this.storage.upload(file, filename).then((url) => {
      this.asyncTasks.pop();
      this.formGroup.get("coverImage")?.setValue(url);
    });
  }

  uploadProfile(file: File) {
    let filename = `public/${moment().format("YYYY/MM")}`;
    this.asyncTasks.push(true);
    this.storage.upload(file, filename).then((url) => {
      this.asyncTasks.pop();
      this.formGroup.get("profileImage")?.setValue(url);
    });
  }

  create() {
    if (!this.formGroup.valid || this.asyncTasks.length) {
      return;
    }
    this.shop
      .create(this.formGroup.value)
      .then(() => this.router.navigate(["/shops"]));
  }
}
