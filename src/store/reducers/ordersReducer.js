import {FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS} from "../actions/actionTypes";

const initialState = {
	orders: {},
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ORDERS_REQUEST:
			return {
				...state
				//loading
			};
		case FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.orders
			};

		default:
			return state
	}
};

export default ordersReducer;