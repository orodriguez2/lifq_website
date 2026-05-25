import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Log in link points to app.lifq.ai", async ({ page }) => {
    const loginLink = page.locator('a[href="https://app.lifq.ai/login"]').first();
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveText("Log in");
  });

  test("Join the beta button in header links to /beta-signup", async ({ page }) => {
    await expect(page.locator('header a[href="/beta-signup"]').first()).toBeVisible();
  });

  test("logo links to homepage", async ({ page }) => {
    await page.goto("/pricing");
    await page.locator('header a[href="/"]').first().click();
    await expect(page).toHaveURL("/");
  });
});
