/* eslint-disable @typescript-eslint/no-unused-vars */
import { it, expect, describe } from "vitest";
import { db } from "./mocks/db";

describe("group", () => {
  it("should", async () => {
    const product = db.product.create({ name: "Apple" });
    console.log(db.product.delete({ where: { id: { equals: product.id } } }));
  });
});
