import {test, expect, type Page} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
});

test.describe('Todo List', () => {
    test('should render tasks correctly', async ({page}) => {

        const tasks = await page.locator('[data-testid="todo-task"]');

        await expect(tasks.locator('p')).toHaveText('Task 1');
    });
});