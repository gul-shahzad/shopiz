import * as uuid from 'uuid'
import { Item } from '../models/Item'
import { ItemAccess } from '../dataLayer/ItemAccess'
import { CreateItemRequest } from '../requests/CreateItemRequest'
import { UpdateItemRequest } from '../requests/UpdateItemRequest'
 import { ItemUpdate } from '../models/ItemUpdate'

const itemAccess = new ItemAccess()

export async function getAllItems(userId: string): Promise<Item[]>{
    return await itemAccess.getItems(userId)
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
export async function deleteItem(userId: string, itemId: string): Promise<String> {
		return itemAccess.deleteItem(userId, itemId)
}

export async function updateItem(
    userId: string,
    itemId: string,
    updateItem: UpdateItemRequest
): Promise<ItemUpdate>{
    const updatedItem: ItemUpdate ={
        name: updateItem.name,
        done: updateItem.done

    }
    return await itemAccess.updateItem(userId, itemId, updatedItem)
}


