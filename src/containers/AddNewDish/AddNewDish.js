import React, {Component} from 'react';
import DishForm from "../DishForm/DishForm";
import axios from "../../axios-dish";

class AddNewDish extends Component {


    addDish = dish => {
        axios.post('dishes.json', dish).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <div>
                <h2>Add new dish</h2>
                <DishForm onSubmit={this.addDish}/>
            </div>
        );
    }
}

export default AddNewDish;