import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { products } from "../mocks/data";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

describe("Product Detail", () => {
  it("should render list of products", async () => {
    render(<ProductDetail productId={1} />);
    const singleProduct = await screen.findByText(
      new RegExp(`${products[0].name}`)
    );

    expect(singleProduct).toBeInTheDocument();
    const productPrice = await screen.findByText(
      new RegExp(`${products[0].price}`)
    );
    expect(productPrice).toBeInTheDocument();
  });

  it("should render error message when product is not found", async () => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)));
    render(<ProductDetail productId={1} />);
    const errorMessage = await screen.findByText(/not found/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render error message for invalid product ID", async () => {
    render(<ProductDetail productId={0} />);
    const errorMessage = await screen.findByText(/invalid/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
