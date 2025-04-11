import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
});

test.describe('New Task', () => {
    test('should allow me to add task', async ({page}) => {
        const newTodo = page.getByPlaceholder("What needs to be done?");
        await newTodo.fill('Study');
        await page.locator('button:text("Add")').click();
        const taskToAdd = page.locator('[data-testid="todo-input-3"]');
        await expect(taskToAdd).toHaveValue('Study');
    })
})