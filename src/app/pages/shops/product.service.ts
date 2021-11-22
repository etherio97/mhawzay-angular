import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private readonly requestUrl = "https://etherio-server.herokuapp.com/shops";

  constructor(private http: HttpClient) {}

  get(shop_id: string, id: string) {
    return this.http.get(`${this.requestUrl}/${shop_id}/${id}`);
  }

  create(shop_id: string, data: any) {
    return this.http.post(`${this.requestUrl}/${shop_id}/products`, data);
  }

  list(shop_id: string) {
    return this.http.get(`${this.requestUrl}/${shop_id}/products`);
  }
}
