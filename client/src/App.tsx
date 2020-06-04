import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ShoppingList from './components/ShoppingList'
import {
	Router,
	Switch,
	Route,
	Link
} from 'react-router-dom' 
import Auth from './auth/Auth'
import { LogIn } from './components/LogIn'

export interface AppProps{
		auth: Auth
		history: any
}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState>{
	constructor(props: AppProps){
		super(props)

		this.handleLogin = this.handleLogin.bind(this)
		this.handleLogout = this.handleLogout.bind(this)

	}
	handleLogin(){
		this.props.auth.login()
	}
	handleLogout(){
		this.props.auth.logout()
	}

	render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Router history={this.props.history}>
                  {this.generateMenu()}

                  {this.generateCurrentPage()}
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }

	generateMenu() {
    return (
      <Menu>
        <Menu.Item name="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Menu position="right">{this.logInLogOutButton()}</Menu.Menu>
      </Menu>
    )
	}
	generateCurrentPage(){
		return(
			<Route path="/" 
			exact 
			render= {props => {
			return <ShoppingList {...props} auth={this.props.auth} />
		}}
		/>         
		)
	}
	logInLogOutButton() {
    if (this.props.auth.isAuthenticated()) {
      return (
        <Menu.Item name="logout" onClick={this.handleLogout}>
          Log Out
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item name="login" onClick={this.handleLogin}>
          Log In
        </Menu.Item>
      )
    }
  }
}
