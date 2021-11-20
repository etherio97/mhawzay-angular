import { Component, OnInit } from "@angular/core";
import { PreloaderService } from "../services/preloader.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
})
export class LayoutComponent implements OnInit {
  constructor(private preloader: PreloaderService) {}

  ngOnInit(): void {
    this.preloader.hide();
  }
}
