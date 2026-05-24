import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page title includes LifQ", async ({ page }) => {
    await expect(page).toHaveTitle(/LifQ/);
  });

  test("hero h1 renders with correct copy", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Your family");
    await expect(page.locator("h1")).toContainText("coverage");
  });

  test("AppShowcase section is visible", async ({ page }) => {
    await expect(
      page.locator("section").filter({ hasText: "at a glance" })
    ).toBeVisible();
  });

  test("FinalCTA heading is visible", async ({ page }) => {
    await expect(page.locator("h2").filter({ hasText: "Ready for clarity?" })).toBeVisible();
  });

  test("hero CTA links to /beta-signup", async ({ page }) => {
    await expect(page.locator('a[href="/beta-signup"]').first()).toBeVisible();
  });
});
