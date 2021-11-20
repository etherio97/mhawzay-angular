import { Injectable } from "@angular/core";
import {
  ref,
  getDatabase,
  push,
  orderByChild,
  query,
  equalTo,
  get,
} from "@firebase/database";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  private readonly collection = "shops";
  private readonly $ref = ref(getDatabase(), this.collection);

  create(data: any) {
    return push(this.$ref, data);
  }

  list<Type>(uid: string): Promise<Type[]> {
    return get(query(this.$ref, orderByChild("uid"), equalTo(uid))).then(
      (snap) =>
        snap.exists()
          ? Object.entries(snap.val()).map(([_id, value]: any) => ({
              _id,
              ...value,
            }))
          : []
    );
  }
}
