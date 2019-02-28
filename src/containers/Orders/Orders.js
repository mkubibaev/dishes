import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchOrders, removeOrder} from "../../store/actions/orderActions";
import {Button, Card, CardBody, CardText} from "reactstrap";

const DELIVERY_PRICE = 150;

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders()
	}

	render() {
		console.log(this.props.orders);

		const orders = Object.keys(this.props.orders).map(orderId => {
		    let orderPrice = 0;
		    let order = this.props.orders[orderId];

		    return (
                <CardBody className="clearfix"
                  key={orderId}
                >
                    Order Id: {orderId}
                    {Object.keys(order).map(dishId => {
                        const dish = this.props.dishes[dishId];
                        const orderQty = order[dishId];
                        const orderItemPrice = dish.price * orderQty;

                        orderPrice += orderItemPrice;

                        return (
                            <CardText>
                                <strong>{dish.name}</strong>: x {orderQty} = {orderItemPrice}
                            </CardText>
                        )
                    })}
                    <p>Delivery: <strong>{DELIVERY_PRICE} KGS</strong></p>
                    <p>Total price: <strong>{orderPrice + DELIVERY_PRICE} KGS</strong></p>
                    <Button color="danger" className="float-right"
                            onClick={this.props.removeOrder}
                    >
                        Complete order
                    </Button>
                </CardBody>
                )
		});

		return (
		    <div>
                <h2>Orders</h2>
            <Card>
               {orders}
            </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    error: state.orders.error,
    dishes: state.dishes,
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    removeOrder: id => dispatch(removeOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);