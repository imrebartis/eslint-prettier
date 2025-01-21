import { expect, test } from "@playwright/test";

test("simple pokemon page test", async ({ page }) => {
  await page.goto("/pokemon");

  await expect(page.getByText("bulbasaur")).toBeVisible();
});
