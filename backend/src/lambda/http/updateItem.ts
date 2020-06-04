import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { UpdateItemRequest } from '../../requests/UpdateItemRequest'
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { updateItem } from '../../businessLogic/Items'
const logger = createLogger('UpdateItem')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const itemId = event.pathParameters.itemId
  const updatedItem: UpdateItemRequest = JSON.parse(event.body)
  const userId = getUserId(event);

  logger.info("UpdateItem Event started")

  await updateItem(userId, itemId, updatedItem)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: " "
  }

}
