import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "./actionTypes";
import axios from '../../axios-dishes';


export const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
export const fetchDishesSuccess = dishes => ({type: FETCH_DISHES_SUCCESS, dishes});
export const fetchDishesFailure = error => ({type: FETCH_DISHES_FAILURE, error});

export const fetchDishes = () => {
	return dispatch => {
		dispatch(fetchDishesRequest());
		axios.get('dishes.json').then(response => {
			dispatch(fetchDishesSuccess(response.data));
		}, error => {
			dispatch(fetchDishesFailure(error));
		});
	}
};

export const addDish = (dish, history) => {
	return dispatch => {
		axios.post('dishes.json', dish).then(
			() => {history.push('/');},
			error => dispatch(() => console.log(error))
		);
	}
};

//editDish

export const removeDish = id => {
	return async dispatch => {
		await axios.delete(`dishes/${id}.json`);
		dispatch(fetchDishes());
	}
};
