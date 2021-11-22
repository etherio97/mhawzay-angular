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
    if (!files.length) return;
    let output = URL.createObjectURL(files[0]);
    el.style.background = "url(" + output + ") no-repeat ";
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center center";
    this.loaded = true;
    this.change.emit(files[0]);
  }
}
