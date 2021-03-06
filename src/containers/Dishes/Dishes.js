import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Alert, Button, Col, Row} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import Dish from "../../components/Dish/Dish";
import {fetchDishes, removeDish} from "../../store/actions/dishesActions";
import Loader from "../../components/UI/Loader/Loader";

class Dishes extends Component {

    componentDidMount () {
        this.props.fetchDishes()
    }

    convertToArr = obj => {
        return Object.keys(obj).map(id => {
            return {...obj[id], id};
        });
    };

    render() {
        if (this.props.error) {
            return (
                <Alert color="danger">
                    {this.props.error}
                </Alert>
            )
        }

        let dishes = (
            <Row>
                {this.convertToArr(this.props.dishes).map(dish => (
                    <Col xs="12" md="4" key={dish.id}>
                        <Dish
                            {...dish}
                            clicked={() => this.props.removeDish(dish.id)}
                        />
                    </Col>
                ))}
            </Row>
        );

        return (
            <Fragment>
                <div className="page-top clearfix">
					<h2 className="float-left">Dishes</h2>
					<RouterNavLink to={'/dishes/add'} className="float-right">
						<Button color="info">
							Add new dish
						</Button>
					</RouterNavLink>
                </div>

                {this.props.loading ? <Loader/> : dishes}

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    error: state.dishes.error,
    loading: state.dishes.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    removeDish: id => dispatch(removeDish(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
