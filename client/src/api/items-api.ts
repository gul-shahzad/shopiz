import {apiEndpoint} from '../config'
import { ShoppingModel } from '../types/ShoppingModel'
import Axios from 'axios'

export async function getItems(idToken: string): Promise<ShoppingModel[]> {
	console.log("Getting shopping list from API")
	console.log("Idtoken "+idToken)
  
	const response = await Axios.get(`${apiEndpoint}/items`, {
		headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${idToken}`
    },
  })
  console.log('Items:', response.data)
  console.log('Response:', response)
  
  return response.data.items
}

// TODO 
// try to use the same method as menitoned on youtube video. 
// https://www.youtube.com/watch?v=DLX62G4lc44&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&start_radio=1&t=3600
// add try catch block