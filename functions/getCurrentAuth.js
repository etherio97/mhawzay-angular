import axios from "axios";
import { env } from "process";

export default function getCurrentAuth(idToken) {
  let url = new URL(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup"
  );
  url.searchParams.append("key", env.FIREBASE_API_KEY);
  return axios.post(url.toString(), { idToken }).then(({ data }) => {
    let user = data.users[0];
    if ("customAttributes" in user) {
      user.customAttributes = JSON.parse(user.customAttributes);
    }
    return user;
  });
}
