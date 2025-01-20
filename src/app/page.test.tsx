import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import HomePage from "./page";

test("Basic page test", () => {
  render(<HomePage />);
  expect(screen.getByText("Button & Counter Test")).toBeDefined();
});
