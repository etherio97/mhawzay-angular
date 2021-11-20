import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cover-image",
  templateUrl: "./cover-image.component.html",
})
export class CoverImageComponent {
  @Output() change = new EventEmitter();

  loaded = false;

  uploadImage(el: HTMLDivElement, event: any) {
    let files = event.target.files;
    let file = files[0];
    let reader = new FileReader();
    if (!file) return;
    this.change.emit(file);
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      this.loaded = true;
      el.style.background = "url(" + e.target.result + ") no-repeat ";
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center center";
    };
  }
}