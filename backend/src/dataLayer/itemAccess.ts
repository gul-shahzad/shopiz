import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { createLogger } from '../utils/logger'
import { Item } from '../models/Item'
//import { TodoUpdate } from '../models/TodoUpdate'
import * as AWS from 'aws-sdk'

const AWSXRay = require('aws-xray-sdk');
const XAWS = AWSXRay.captureAWS(AWS)


const logger = createLogger('createItem')

// const s3 = new XAWS.S3({
//     signatureVersion: 'v4'
// })

// const urlExpireation = process.env.SIGNED_URL_EXPIRATION
export class ItemAccess{
	
    constructor(
        private readonly docClient: DocumentClient = new XAWS.DynamoDB.DocumentClient(),
        private readonly itemsTable = process.env.ITEMS_TABLE
        // private readonly bucketName = process.env.IMAGES_S3_BUCKET,
        ){
        }

		// Todo: replace scan with query once authentication is introduced. Remove Scan access from table in yml file
		async getItems(): Promise<Item[]> {
			logger.info("Trying to retrieve shopping items")
				
				const result = await this.docClient.scan({
            TableName: this.itemsTable
            //KeyConditionExpression: 'userId = :userId',
            //ExpressionAttributeValues:{
            //    ':userId' :  userId
            //}

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
    
    // async updateTodo(userId: string, todoId: string, todoUpdate: TodoUpdate): Promise<TodoUpdate>{
    //     var params = {
    //     TableName : this.todosTable,
    //     Key: {
    //         userId: userId, 
    //         todoId : todoId
    //     },
    //     UpdateExpression: "set name =:n, dueDate =:u, done:d",
    //     ExpressionAttributeValues:{
    //         ":n": todoUpdate.name,
    //         ":u": todoUpdate.dueDate,
    //         ":d": todoUpdate.done
    //     },
    //     ReturnValues: "UPDATED_NEW"
    //     };
    //     await this.docClient.update(params).promise
    //     return todoUpdate   
    // }
    
    // async deleteTodo(userId: string,todoId: string): Promise<String>{
    //     await this.docClient.delete({
    //         TableName: this.todosTable,
    //         Key: {
    //             userId: userId,
    //             todoId: todoId
    //         }
    //     }).promise()
    //     logger.info("Todo Item is deleted successfully")
    //     return ''
    // }

    // async getUploadUrl(userId: string, todoId: string): Promise<String>{
    //     const url = getUrl(todoId, this.bucketName)
    //     const attachmentUrl = `https://${this.bucketName}.s3.amazonaws.com/${todoId}`
        
    //     const options = {
    //         TableName: this.todosTable,
    //         Key: {
    //             userId: userId,
    //             todoId: todoId
    //         },
    //         UpdateExpression: "set attachmentUrl = :r",
    //         ExpressionAttributeValues: {
    //             ":r": attachmentUrl
    //         },
    //         ReturnValues: "UPDATED_NEW"
    //     };

    //     await this.docClient.update(options).promise()
    //     logger.info("Signed Url created ", url)
    //     return url;
    // }    
}
// function getUrl(todoId: string, bucketName: string ): string {
//     return s3.getSignedUrl('putObject', {
//         Bucket: bucketName,
//         Key: todoId,
//         Expires: parseInt(urlExpireation)
//     })
//  }