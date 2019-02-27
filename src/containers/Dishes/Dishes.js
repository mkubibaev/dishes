import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import axios from '../../axios-dishes';
import Dish from "../../components/Dish/Dish";

class Dishes extends Component {
    state = {
        dishes: null
    };

    getDishes = () => {
		axios.get('dishes.json').then(response => {
		    if (response.data) {
				const dishes = Object.keys(response.data).map(id => {
					return {...response.data[id], id};
				});

				this.setState({dishes});
            }

		});
    };

    componentDidMount () {
        this.getDishes();
    }

	deleteHandler = (id) => {
        axios.delete(`dishes/${id}.json`).then(this.getDishes)
    };

    render() {
        let dishes = 'Empty list';

        if(this.state.dishes) {
            dishes = this.state.dishes.map(dish => (
                <Col xs="12" md="4" key={dish.id}>
                    <Dish
                        {...dish}
						clicked={() => this.deleteHandler(dish.id)}
                    />
                </Col>
            ));
        }

        return (
            <Fragment>
                <div className="page-top clearfix">
					<h2 className="float-left">Dishes</h2>
					<RouterNavLink to={'/add'} className="float-right">
						<Button color="info">
							Add new dish
						</Button>
					</RouterNavLink>
                </div>

				<Row>
					{dishes}
                </Row>
            </Fragment>
        );
    }
}

export default Dishes;
