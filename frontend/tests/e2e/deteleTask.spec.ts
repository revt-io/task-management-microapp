import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
});

test.describe('Todo List', () => {
    test('should delete tasks correctly', async ({page}) => {
        const task = await page.getByTestId('todo-task');
        await expect(task).toHaveCount(2);

        const taskToDelete = page.locator('[data-testid="todo-task"]:nth-child(1)');

        const deleteButton = taskToDelete.locator('[data-testid="delete-button"]');
        await deleteButton.click();

        await expect(page.locator('[data-testid="todo-input-1"]')).not.toBeVisible();
    });
});