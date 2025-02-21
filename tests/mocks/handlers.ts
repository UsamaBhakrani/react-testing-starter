import { http, HttpResponse } from "msw";
import { categories, products } from "./data";

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json(categories);
  }),
  http.get("/products", () => {
    return HttpResponse.json(products);
  }),
  http.get("/products/:id", ({ params }) => {
    const id = parseInt(params.id as string);
    const product = products.find((product) => product.id === id);

    if (!product) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(product);
  }),
];

export type Handler = {
  id: number;
  name: string;
};
