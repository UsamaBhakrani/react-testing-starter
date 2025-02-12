import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json([
      { id: 1, name: "Electronics" },
      { id: 2, name: "Beauty" },
      { id: 3, name: "Gardening" },
    ]);
  }),
  http.get("/products", () => {
    return HttpResponse.json([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Headphones" },
      { id: 3, name: "Pot" },
    ]);
  }),
];

export type Handler = {
  id: number;
  name: string;
};
