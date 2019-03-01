import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchOrders, removeOrder} from "../../store/actions/orderActions";
import {Button, Card, CardBody} from "reactstrap";
import {fetchDishes} from "../../store/actions/dishesActions";

const DELIVERY_PRICE = 150;

class Orders extends Component {

    componentDidMount() {
        this.props.fetchDishes().then(this.props.fetchOrders)

	}

	render() {
		const orders = Object.keys(this.props.orders).map(orderId => {
		    let orderPrice = 0;
		    let order = this.props.orders[orderId];

            return (
                <Card key={orderId} style={{marginBottom: '20px'}}>
                    <CardBody>
                        {Object.keys(order).map(dishId => {

                            const dish = this.props.dishes[dishId];
                            const orderQty = order[dishId];
                            const orderItemPrice = dish.price * orderQty;

                            orderPrice += orderItemPrice;

                            return (
                                <p key={dishId}>
                                    {dish.name}: x {orderQty} = <strong>{orderItemPrice} KGS</strong>
                                </p>
                            )
                        })}
                        <p>Delivery: <strong>{DELIVERY_PRICE} KGS</strong></p>
                        <p>Total price: <strong>{orderPrice + DELIVERY_PRICE} KGS</strong></p>
                        <Button color="info" className="float-right"
                                onClick={() => this.props.removeOrder(orderId)}
                        >
                            Complete order
                        </Button>
                    </CardBody>
                </Card>
                )
		});

		return (
		    <Fragment>
                <div className="page-top clearfix">
                    <h2>Orders</h2>
                </div>

                {orders}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    dishes: state.dishes.dishes,
    error: state.orders.error,
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchDishes: () => dispatch(fetchDishes()),
    removeOrder: id => dispatch(removeOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
