import {FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS} from "../actions/actionTypes";

const DELIVERY_PRICE = 150;

const initialState = {
	orders: {},
	delivery: DELIVERY_PRICE,
	loading: true,
	error: null
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDERS_REQUEST:
			return {
				...state,
				loading: true
			};

		case FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.orders,
				loading: false
			};

		case FETCH_ORDERS_FAILURE:
			return {
				...state,
				error: action.error,
				loading: false
			};

		default:
			return state
	}
};

export default ordersReducer;
