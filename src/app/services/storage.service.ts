import { Injectable } from "@angular/core";
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  upload(file: File, prefix: string = "") {
    let fileName = [prefix, Date.now() + "-" + file.name].join("/");
    let fileRef = ref(getStorage(), fileName);
    return uploadBytes(fileRef, file).then(() => getDownloadURL(fileRef));
  }
}
