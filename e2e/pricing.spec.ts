import { test, expect } from "@playwright/test";

// Pricing page is hidden — all hidden routes redirect to /
test.describe("Hidden routes redirect to homepage", () => {
  test("/pricing redirects to /", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page).toHaveURL("/");
  });

  test("/privacy redirects to /", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page).toHaveURL("/");
  });

  test("/terms redirects to /", async ({ page }) => {
    await page.goto("/terms");
    await expect(page).toHaveURL("/");
  });
});
