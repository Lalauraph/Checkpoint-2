import { Actions } from '../types/store';
import { Product } from '../types/product';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.ADD_PRODUCT:
			return {
				...currentState,
				tasks: [...currentState.tasks, payload],
			};

		case Actions.REMOVE_PRODUCT:
			return {
				...currentState,
				tasks: currentState.tasks.filter((product: Product) => product.name !== payload),
			};

		default:
			break;
	}
};