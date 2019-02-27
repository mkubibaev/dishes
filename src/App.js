import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import Layout from "./components/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";
import DishForm from "./containers/DishForm/DishForm";

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={Dishes}/>
					<Route path="/dishes/add" component={DishForm}/>
					<Route path="/dishes/edit/:id" component={DishForm}/>
					<Route path="/orders"  component={Orders}/>
					<Route render={() => <h1>Hot found</h1>}/>
				</Switch>
			</Layout>
		);
	}
}

export default App;
