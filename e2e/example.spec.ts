import { test, expect, Page } from '@playwright/test'

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment',
]

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return page.waitForFunction(
    (e) => JSON.parse(localStorage['react-todos']).length === e,
    expected
  )
}

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc')
})

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    // Create 1st todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[0])
    await page.locator('.new-todo').press('Enter')

    // Make sure the list only has one todo item.
    await expect(page.locator('.view label')).toHaveText([TODO_ITEMS[0]])

    // Create 2nd todo.
    await page.locator('.new-todo').fill(TODO_ITEMS[1])
    await page.locator('.new-todo').press('Enter')

    // Make sure the list now has two todo items.
    await expect(page.locator('.view label')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1],
    ])

    await checkNumberOfTodosInLocalStorage(page, 2)
  })
})
