const { test, expect } = require('@playwright/test');

test('adds a task via UI', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('input[placeholder="Task title"]', 'Playwright Task');
  await page.fill('input[type=number]', '4');
  await page.click('button:has-text("Add")');
  // give server a moment to persist
  await page.waitForTimeout(300);
  // verify via API
  const res = await page.request.get('http://localhost:4000/tasks');
  const tasks = await res.json();
  expect(tasks.some(t => t.title === 'Playwright Task')).toBeTruthy();
});
