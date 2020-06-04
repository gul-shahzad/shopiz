import React from 'react'
import { getItems } from '../api/items-api'
import { History } from 'history'
import { ShoppingModel } from '../types/ShoppingModel'
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Loader
} from 'semantic-ui-react'
import Auth from '../auth/Auth'

interface ShoppingState{
		items : ShoppingModel[]
		newItem: string
		loadingItems: boolean
}

interface ShoppingProps {
	auth: Auth
	history: History
}

class ShoppingList extends React.Component<ShoppingProps, ShoppingState>{
	state: ShoppingState = {
		items : [], 
		newItem : '',
		loadingItems: true
	}
	async componentDidMount(){
    console.log("Loading componentDidMount")
		try{
		const items = await getItems(this.props.auth.getIdToken())
    this.setState({
				items, 
				loadingItems: false
    })
  } catch(e){
			alert(`Failed to fetch Items: ${e.message}`)
		}
	}
  render(){
      return(
          <div>
								{this.renderShoppingList()}          
					</div>
      )
	}
	renderShoppingList(){
		return(
			<Grid padded>
			{this.state.items.map((item, pos) =>{
				console.log("item" + item)
				return(
					<Grid.Row key={item.itemId}>
						<Grid.Column width={1} verticalAlign="middle">
							<Checkbox
								checked = {item.done}
							/>
						</Grid.Column>
						<Grid.Column width={10} verticalAlign="middle">
							{item.name}
						</Grid.Column>
						<Grid.Column width={3} floated="right">
							{item.createdAt}
						</Grid.Column>
					</Grid.Row>		
				)	
			})}
			</Grid>

		)
	}

}
export default ShoppingList

// TODO 
// add design layout
// set state through interface
// set props through interface 
// replace state with hook https://reactjs.org/docs/hooks-state.html
