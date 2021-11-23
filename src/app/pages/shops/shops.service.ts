import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShopsService {
  private readonly requestUrl =
    "https://etherio-server.herokuapp.com/manage/shops";
  public shops: any[] = [];
  constructor(private http: HttpClient) {}

  get(id: string) {
    return this.http.get(`${this.requestUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.requestUrl, data);
  }

  list() {
    return this.http.get(this.requestUrl);
  }
}
