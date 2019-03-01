import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
	dishes: {},
	error: null
};

const dishesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DISHES_REQUEST:
			return state;

		case FETCH_DISHES_SUCCESS:
			return {
				...state,
				dishes: action.dishes
			};

		case FETCH_DISHES_FAILURE:
			return {
				...state,
				error: action.error
			};

		default:
			return state
	}
};

export default dishesReducer;
