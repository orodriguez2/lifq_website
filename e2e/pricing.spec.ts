import { test, expect } from "@playwright/test";

test.describe("Pricing page", () => {
  test("/pricing loads the pricing page", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page).toHaveURL("/pricing");
  });
});
