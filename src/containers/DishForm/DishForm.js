import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class DishForm extends Component {
    state = {
        name: '',
        image: '',
        price: 0
    };

    valueChanged = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <Form className="NewDish" onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label for="category" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name"  placeholder="Name"
                               value={this.state.name}
                               onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="category" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input type="url" name="image" placeholder="Image"
                               value={this.state.image}
                               onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="category" sm={2}>Price</Label>
                    <Col sm={10}>
                        <Input type="price" name="price"
                               value={this.state.price}
                               onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{size: 10, offset: 2}}>
                        <Button color="primary"
                                type="submit">
                            Save
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default DishForm;