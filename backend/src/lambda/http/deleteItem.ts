import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { createLogger } from '../../utils/logger'
import { deleteItem } from '../../businessLogic/Items'
const logger = createLogger('DeleteItem')
import { getUserId } from '../utils'


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const itemId = event.pathParameters.itemId
  logger.info("Delete Event is:", event )
	logger.info("Delete ItemId ", itemId )

  const userId = getUserId(event);
	logger.info("Delete UserId ", userId )

  await deleteItem(userId, itemId)
  	return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true
			},
			body: " "
	}
}