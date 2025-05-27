import _axios from "axios";
import env from "~/config";

export const baseURL = env.SHOPIFY_API_ENDPOINT;

export default _axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": env.SHOPIFY_ACCESS_TOKEN,
  },
});
