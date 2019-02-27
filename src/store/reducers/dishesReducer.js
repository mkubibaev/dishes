import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
	dishes: [],
	error: null
};

const convertToArr = obj => {
	return Object.keys(obj).map(id => {
		return {...obj[id], id};
	});
};

const dishesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DISHES_REQUEST:
			return state;

		case FETCH_DISHES_SUCCESS:
			let dishes = [];

			if (action.dishes) {
				dishes = convertToArr(action.dishes);
			}
			return {
				...state,
				dishes
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