import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Button from "./Button";

test("Basic button test", () => {
  render(<Button label="Foo" />);
  expect(screen.getByText("Foo")).toBeDefined();
});
