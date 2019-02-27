import React, {Component, Fragment} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {addDish} from "../../store/actions/dishesActions";
import {connect} from "react-redux";

class DishForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			image: '',
			price: '',
			edit: false
		};

		if (this.props.match.params.id) {
			this.state.edit = true;
		}
	}


	valueChanged = event => {
		const {name, value} = event.target;

		this.setState({[name]: value});
	};

	submitHandler = event => {
		event.preventDefault();

		if (this.state.name && this.state.image && this.state.price) {
			this.props.addDish(this.state, this.props.history);
		} else {
			alert('All fields required!');
		}
	};

	render() {
		return (
			<Fragment>
				<div className="page-top clearfix">
					<h2 className="float-left">{this.state.edit ? 'Edit dish' : 'Add new dish'}</h2>
				</div>

				<Form onSubmit={this.submitHandler}>
					<FormGroup row>
						<Label sm={2}>Name</Label>
						<Col sm={10}>
							<Input type="text" name="name" id="name" placeholder="product name"
								   value={this.state.name}
								   onChange={this.valueChanged}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>Image</Label>
						<Col sm={10}>
							<Input type="url" name="image" placeholder="image url"
								   value={this.state.image}
								   onChange={this.valueChanged}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label sm={2}>Price</Label>
						<Col sm={10}>
							<Input type="number" name="price" placeholder="0"
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
			</Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addDish: (dish, history) => dispatch(addDish(dish, history)),
});


export default connect(null,mapDispatchToProps)(DishForm);