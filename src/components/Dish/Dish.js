import React from 'react';
import {Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Dish = props => {
	return (
		<Card>
			<CardImg top width="100%" src={props.image} alt="Card image cap"/>
			<CardBody>
				<CardTitle>{props.name}</CardTitle>
				<CardText><strong>{props.price} KGS</strong></CardText>
			</CardBody>
			<CardFooter className="clearfix">
				<RouterNavLink to={'/dishes/' + props.id + '/edit'} className="float-left">
					<Button color="success">Edit</Button>
				</RouterNavLink>
				<Button className="float-right" color="danger" onClick={props.clicked}>Delete</Button>
			</CardFooter>
		</Card>
	);
};

export default Dish;