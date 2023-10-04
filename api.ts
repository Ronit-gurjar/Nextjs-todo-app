import { ITask } from "./types/task";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`,{
        method:'POST', 
        headers:{'content-type':'application/json'},
        body: JSON.stringify(todo)
    });
    const newtodos = await res.json();
    return newtodos;
}

