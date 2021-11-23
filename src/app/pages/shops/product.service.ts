import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly requestUrl =
    "https://etherio-server.herokuapp.com/manage/products";

  constructor(private http: HttpClient) {}

  get(shop_id: string, id: string) {
    return this.http.get(this.requestUrl, { params: { shop_id } });
  }

  create(shop_id: string, data: any) {
    return this.http.post(this.requestUrl, data, { params: { shop_id } });
  }

  list(shop_id: string) {
    return this.http.get(this.requestUrl, { params: { shop_id } });
  }
}
