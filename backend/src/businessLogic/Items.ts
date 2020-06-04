import * as uuid from 'uuid'

 import { Item } from '../models/Item'
 import { ItemAccess } from '../dataLayer/ItemAccess'
 import { CreateItemRequest } from '../requests/CreateItemRequest'
// import { UpdateTodoRequest } from '../requests/UpdateTodoRequest' 
// import { TodoUpdate } from '../models/TodoUpdate'

const itemAccess = new ItemAccess()

export async function getAllItems(): Promise<Item[]>{
    return await itemAccess.getItems()
}

export async function createItem(
    createItem: CreateItemRequest,
    userId: string
): Promise<Item>{

    const itemId = uuid.v4()
    return await itemAccess.createItem({
			  userId: userId,
        itemId: itemId,
        createdAt: new Date().toISOString(),
				name: createItem.name,
        done: false
    })
}
// export async function deleteTodo(userId: string, todoId: string): Promise<String> {
//     return ItemAccess.deleteTodo(userId, todoId)

// }
// export async function getUploadUrl(userId: string, todoId: string): Promise<String>{
//     return ItemAccess.getUploadUrl(userId, todoId)
// }

// export async function updateTodo(
//     userId: string,
//     todoId: string,
//     updateTodo: UpdateTodoRequest
// ): Promise<TodoUpdate>{
//     const updatedTodo: TodoUpdate ={
//         name: updateTodo.name,
//         dueDate: updateTodo.dueDate,
//         done: updateTodo.done

//     }
//     return await todoAccess.updateTodo(userId, todoId, updatedTodo)
// }


