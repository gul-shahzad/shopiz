import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { createLogger } from '../utils/logger'
import { Item } from '../models/Item'
import { ItemUpdate } from '../models/ItemUpdate'
import * as AWS from 'aws-sdk'

const AWSXRay = require('aws-xray-sdk');
const XAWS = AWSXRay.captureAWS(AWS)

const logger = createLogger('createItem')

export class ItemAccess{
	
    constructor(
        private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private readonly itemsTable = process.env.ITEMS_TABLE
        // private readonly bucketName = process.env.IMAGES_S3_BUCKET,
        ){
        }

		async getItems(userId: string): Promise<Item[]> {
			logger.info("Trying to retrieve shopping items")
				
      const result = await this.docClient.query({
				TableName: this.itemsTable,
				KeyConditionExpression: 'userId = :userId',
				ExpressionAttributeValues:{
						':userId' :  userId
				}

        }).promise()
        logger.info("Shopping Items retrieved successfully")

        const items = result.Items
        return items as Item[]

    }
   
  	async createItem(item: Item): Promise<Item>{
			await this.docClient.put({
					TableName: this.itemsTable,
					Item: item
			}).promise()
			return item
		}
    
		async updateItem(userId: string, itemId: string, itemUpdate: ItemUpdate): Promise<ItemUpdate>{
			var params = {
			TableName : this.itemsTable,
			Key: {
					userId: userId, 
					itemId : itemId
			},
			UpdateExpression: "set name =:n, done:d",
			ExpressionAttributeValues:{
					":n": "I am finally updated",
					":d": true
			},
			ReturnValues: "UPDATED_NEW"
			};
			const result = await this.docClient.update(params).promise
			logger.log("Result", result.toString())
			//return itemUpdate  
			// console.log("Updating the item...");
			// this.docClient.update(params, function(err, data) {
			// if (err) {
			// 		logger.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
			// } else {
			// 		logger.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
			// }
			// });
			return itemUpdate 
		}

    async deleteItem(userId: string,itemId: string): Promise<String>{
        await this.docClient.delete({
            TableName: this.itemsTable,
            Key: {
                userId: userId,
                itemId: itemId
            }
        }).promise()
        logger.info("Shopping Item is deleted successfully")
        return ''
    } 
}
