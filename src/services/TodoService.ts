import { todoApi } from "src/boot/axios";
import { Todo } from "src/types/Todo";

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await todoApi.get<Todo[]>('/todos');
    return response.data;
}

export const createTodo = async (newTodo: string) => {
    console.log("newTodo: " + newTodo);
    await todoApi.post('/todos', {name: newTodo});
    console.log('createTodo');
};
