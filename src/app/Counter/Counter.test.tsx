import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Counter from "./Counter";

test("tests counter", async () => {
  render(<Counter />);

  await userEvent.click(screen.getByText("Increment"));

  expect(screen.getByTestId("count")).toHaveTextContent("Count: 2");
});
