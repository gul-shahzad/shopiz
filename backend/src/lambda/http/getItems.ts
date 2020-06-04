import 'source-map-support/register'
//import { getUserId } from '../utils'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { getAllItems } from '../../businessLogic/Items'

import { createLogger } from '../../utils/logger'
const logger = createLogger('GetItems')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  logger.info("Start processing getItems event", event)
  //const userId = getUserId(event);


	const items = await getAllItems()
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        items
      })
    }
}

