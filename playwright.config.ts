import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3001";
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: !isCI,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["list"],
  ],
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // In local dev: auto-start the dev server if one isn't already running.
  // In CI: server is started explicitly before Playwright runs; PLAYWRIGHT_BASE_URL is set.
  webServer: !isCI
    ? {
        command: "npm run dev",
        url: "http://localhost:3001",
        reuseExistingServer: true,
        timeout: 120_000,
      }
    : undefined,
});
