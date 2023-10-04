import { ITask } from "./types/task";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();

    todos.forEach((task: ITask) => {
        task.taskType = "normal";
    });

    console.log(todos)
    return todos;
}

