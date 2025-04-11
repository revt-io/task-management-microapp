import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
});

test.describe('Edit Task', () => {
    test('should allow me to edit task', async ({page}) => {
        const task = await page.getByTestId('todo-task');
        await expect(task).toHaveCount(2);

        const taskToEdit = page.locator('[data-testid="todo-input-1"]');

        await expect(taskToEdit).toHaveValue('Task 1');

        await taskToEdit.fill('Study');
        await expect(taskToEdit).toHaveValue('Study');
    })
})