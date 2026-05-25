import { test, expect } from "@playwright/test";

// Pricing page is temporarily hidden — /pricing redirects to /
test.describe("Pricing page", () => {
  test("/pricing redirects to homepage", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page).toHaveURL("/");
  });
});
