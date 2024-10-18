import { Actions } from '../types/store';
import { Product } from '../types/product';

export const addProduct = (payload: Product) => {
	return {
		action: Actions.ADD_PRODUCT,
		payload,
	};
};

export const removeProduct = (payload: number) => {
	return {
		action: Actions.REMOVE_PRODUCT,
		payload,
	};
};