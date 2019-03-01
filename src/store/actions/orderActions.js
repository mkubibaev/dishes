import axios from '../../axios-dishes';
import {FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS} from "./actionTypes";

export const fetchOrdersRequest = () => ({type: FETCH_ORDERS_REQUEST});
export const fetchOrdersSuccess = orders => ({type: FETCH_ORDERS_SUCCESS, orders});
export const fetchOrdersFailure = error => ({type: FETCH_ORDERS_FAILURE, error});

export const fetchOrders = () => {
	return dispatch => {
		dispatch(fetchOrdersRequest());
		axios.get('dishes-orders.json').then(response => {
			dispatch(fetchOrdersSuccess(response.data));
		}, error => {
			dispatch(fetchOrdersFailure(error));
		});
	}
};

export const removeOrder = id => {
    return async dispatch => {
        await axios.delete(`dishes-orders/${id}.json`);
        dispatch(fetchOrders());
    }
};
