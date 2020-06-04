import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import { CreateItemRequest } from '../../requests/CreateItemRequest'
import { createItem } from '../../businessLogic/Items'
import { createLogger } from '../../utils/logger'

const logger = createLogger('CreateItem')
import { getUserId } from '../utils'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newItem: CreateItemRequest = JSON.parse(event.body)
  logger.info('Processing event', event)

  const userId = getUserId(event);
  const item = await createItem(newItem, userId)

  return {
    statusCode : 201,
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({item: item})
  }
}

