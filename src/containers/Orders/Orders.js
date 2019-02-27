import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchOrders} from "../../store/actions/orderActions";

class Orders extends Component {

    componentDidMount() {
        this.props.fetchOrders()
	}

	render() {
		console.log(this.props.orders);
		return (
            <div>
                <h1>This is Orders</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    error: state.orders.error
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);