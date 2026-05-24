import { test, expect } from "@playwright/test";

test.describe("Beta signup form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/beta-signup");
  });

  test("page heading is correct", async ({ page }) => {
    await expect(page.locator("h1")).toContainText("Request your invite");
  });

  test("all required fields are present", async ({ page }) => {
    await expect(page.locator("#first_name")).toBeVisible();
    await expect(page.locator("#last_name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#age_range")).toBeVisible();
    await expect(page.locator("#household_type")).toBeVisible();
  });

  test("honeypot field is not in viewport", async ({ page }) => {
    const honeypot = page.locator('[aria-hidden="true"][tabindex="-1"]');
    await expect(honeypot).not.toBeInViewport();
  });

  test("submit button text is 'Request my invite'", async ({ page }) => {
    await expect(page.locator('button[type="submit"]')).toContainText("Request my invite");
  });

  test("submitting empty form shows validation errors", async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    // At least one validation error should appear
    const errors = page.locator("p.text-xs.text-destructive");
    await expect(errors.first()).toBeVisible();
  });
});
