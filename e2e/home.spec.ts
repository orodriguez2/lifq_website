import { test, expect } from "@playwright/test";

test.describe("Coming soon page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page title includes LifQ", async ({ page }) => {
    await expect(page).toHaveTitle(/LifQ/);
  });

  test("LifQ logo is visible", async ({ page }) => {
    await expect(page.locator('img[alt="LifQ"]').first()).toBeVisible();
  });

  test("hero h1 renders with correct copy", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Your family");
  });

  test("beta signup CTA links to /beta-signup", async ({ page }) => {
    await expect(page.locator('a[href="/beta-signup"]').first()).toBeVisible();
  });
});
