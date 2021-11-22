import { Injectable } from "@angular/core";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(private auth: AuthService) {}

  upload(file: File) {
    let userId = this.auth.getCurrentUser()?.uid || "";
    let filePath = [
      userId,
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate(),
      Date.now() + "-" + file.name,
    ].join("/");
    let fileRef = ref(getStorage(), filePath);
    return uploadBytes(fileRef, file).then(() => getDownloadURL(fileRef));
  }
}
