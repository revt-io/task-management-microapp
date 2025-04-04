import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

test.describe('New Task', () => {
    test('should allow me to add task', async ({ page }) => {
        // create a new todo locator
        const newTodo = page.getByPlaceholder('What needs to be done?');
        // Create 1st todo.
        await newTodo.fill('Study');
        await page.locator('button:text("Add")').click();

        // Make sure the list only has one todo item.
        await expect(page.getByTestId('todo-title')).toContainText('Study');
    })
})