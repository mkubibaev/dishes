import React, {Component} from 'react';
import {Button} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class AllDishes extends Component {
    state = {
        dishes: null
    };

    render() {
        return (
            <div className="Dishes">
                <h2>Dishes</h2>
                <RouterNavLink to={'/dishForm/'}>
                    <Button color="warning">
                        Add New Dish
                    </Button>
                </RouterNavLink>
            </div>
        );
    }
}

export default AllDishes;
