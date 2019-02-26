import React, {Component} from 'react';
import {Button, Card, CardBody, CardColumns, CardFooter, CardImg, CardText, CardTitle, Col} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import axios from '../../axios-dish';

class AllDishes extends Component {
    state = {
        dishes: null
    };

    componentDidMount () {
        let url = 'dishes.json';

        axios.get(url).then(response => {
            console.log(response);

            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });

            this.setState({dishes});
        });
    }

    render() {

        let dishes = null;

        if(this.state.dishes) {
            dishes = this.state.dishes.map(dishes => (
                <Card key={dishes.id}>
                    <CardBody>
                        <CardImg top width="100%" src={dishes.image} alt="Card image cap"/>
                        <CardTitle>{dishes.name}</CardTitle>
                        <CardText><strong>{dishes.price} KGS</strong></CardText>
                    </CardBody>
                    <CardFooter>
                        <RouterNavLink to={'/dishes/' + dishes.id + '/edit'}>
                            <Button color="success">Edit</Button>
                        </RouterNavLink>
                        <RouterNavLink to={'/dishes/' + dishes.id + '/delete'}>
                            <Button color="danger">Delete</Button>
                        </RouterNavLink>
                    </CardFooter>
                </Card>
            ));
        }

        return (
            <div className="Dishes">
                <h2>Dishes</h2>
                <Col sm={3}>
                    <RouterNavLink to={'/dishForm/'}>
                        <Button color="warning">
                            Add New Dish
                        </Button>
                    </RouterNavLink>
                </Col>
                <Col sm={9}>
                    <CardColumns>
                        {dishes}
                    </CardColumns>
                </Col>
            </div>
        );
    }
}

export default AllDishes;
