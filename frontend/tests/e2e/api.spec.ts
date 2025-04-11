import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:5173/');
});

test.describe('API tests', () => {
    test('Get todos', async ({request}) => {
        const todos = await request.get('http://localhost:8080/api/tasks');
        expect(todos.ok()).toBeTruthy();
        const todosVal = await todos.json();
        const hasStudyTask = todosVal.some(todo => todo.title.toLowerCase() === 'study');
        expect(hasStudyTask).toBeTruthy();
    })

    test('Edit todos', async ({request}) => {
        const editTodo = await request.put('http://localhost:8080/api/tasks/task', {
            data: {
                id: 152,
                title: 'studies'
            }
        });
        expect(editTodo.ok()).toBeTruthy();

        const getTodo = await request.get('http://localhost:8080/api/tasks');
        const todosVal = await getTodo.json();
        const hasStudiesTask = todosVal.some(todo => todo.title.toLowerCase() === 'studies');
        expect(hasStudiesTask).toBeTruthy();
    })
    test('Delete todo', async ({request}) => {
        const newTodo = await request.delete(`http://localhost:8080/api/tasks/task/${1}`)
        expect(newTodo.ok()).toBeTruthy();
    })

    test('Add todo', async ({request}) => {
        const newTodo = await request.post('http://localhost:8080/api/tasks/task', {
            data: {
                title: 'Study'
            }
        })
        expect(newTodo.ok()).toBeTruthy();
    })
})