import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
})
export class ProfileAvatarComponent {
  uploadImage(el: HTMLDivElement, event: any) {
    let files = event.target.files;
    let file = files[0];
    let reader = new FileReader();
    if (!file) return;
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      el.style.background = 'url(' + e.target.result + ') no-repeat';
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center center';
    };
  }
}
