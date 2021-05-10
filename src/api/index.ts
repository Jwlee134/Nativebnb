import axios from "axios";

export const api = axios.create({
  baseURL: "http://0eab0e9d8cc5.ngrok.io/api/v1",
  headers: {
    "content-type": "application/json",
  },
});
