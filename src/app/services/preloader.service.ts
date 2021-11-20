import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PreloaderService {
  private el?: HTMLElement | null;
  private hidden: boolean;
  private clone?: string;

  constructor() {
    this.el = document.getElementById("preloader");
    this.hidden = !this.el;
    this.clone = this.el?.innerHTML;
  }

  show() {
    if (!this.hidden) return;
    this.hidden = false;
    this.el = document.createElement("div");
    this.el.id = "preloader";
    this.el.classList.add(
      "transition",
      "transition-all",
      "duration-300",
      "opacity-0"
    );
    this.el.innerHTML = this.clone || "";
    document.body.prepend(this.el);
    requestAnimationFrame(() => {
      this.el?.classList.remove("opacity-0");
      this.el?.classList.add("opacity-100");
    });
  }

  hide() {
    if (this.hidden) return;
    this.hidden = true;
    this.el?.classList.add(
      "transition",
      "transition-all",
      "duration-300",
      "opacity-0"
    );
    setTimeout(() => this.el?.remove(), 500);
  }
}
