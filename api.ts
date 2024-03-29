import { ITask } from "./types/task";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`,{cache:'no-store'});
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    try {
        const res = await fetch(`${baseUrl}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch. Status code: ${res.status}`);
        }

        const newTodo = await res.json();
        return newTodo;
    } catch (error) {
        console.error("Error in addTodo:", error);
        throw error; // Rethrow the error for further handling
    }
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
    try {
        const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch. Status code: ${res.status}`);
        }

        const updatedTodo = await res.json();
        return updatedTodo;
    } catch (error) {
        console.error("Error in addTodo:", error);
        throw error; // Rethrow the error for further handling
    }
};

export const deleteTodo = async (id: string): Promise<void> => {
    try {
        const res = await fetch(`${baseUrl}/tasks/${id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch. Status code: ${res.status}`);
        }
    } catch (error) {
        console.error("Error in addTodo:", error);
        throw error; // Rethrow the error for further handling
    }
};


