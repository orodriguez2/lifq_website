import { test, expect } from "@playwright/test";

test.describe("Pricing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pricing");
  });

  test("page heading is present", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Know what you");
  });

  test("three plan cards render (Free, Solo, Family)", async ({ page }) => {
    await expect(page.locator("h2", { hasText: "Free" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Solo" })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Family" })).toBeVisible();
  });

  test("Annual toggle is active on load", async ({ page }) => {
    const annualBtn = page.locator("button", { hasText: "Annual" });
    await expect(annualBtn).toHaveClass(/bg-brand-blue/);
  });

  test("switching to Monthly updates the billing toggle state", async ({ page }) => {
    const monthlyBtn = page.locator("button", { hasText: "Monthly" });
    await monthlyBtn.click();
    await expect(monthlyBtn).toHaveClass(/bg-brand-blue/);
  });

  test("Most popular badge is visible on Solo plan", async ({ page }) => {
    await expect(page.locator("span", { hasText: "Most popular" })).toBeVisible();
  });

  test("Free plan CTA links to /beta-signup", async ({ page }) => {
    await expect(page.locator('a[href="/beta-signup"]').first()).toBeVisible();
  });
});
