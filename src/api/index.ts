import axios from "axios";

export const api = axios.create({
  baseURL: "http://05674a945ab6.ngrok.io/api/v1",
  headers: {
    "content-type": "application/json",
  },
});
