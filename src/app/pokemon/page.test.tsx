import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "./page";

test("RSC Pokemon Page", async () => {
  render(await Page());
  expect(await screen.findByText("bulbasaur")).toBeDefined();
});
