import { it, expect, describe } from "vitest";
import { Handler } from "./mocks/handlers";

describe("group", () => {
  it("should", async () => {
    const response = await fetch("/categories");
    const data = (await response.json()) as Handler;
    console.log(data);
    expect(data).toHaveLength(3);
  });
});
