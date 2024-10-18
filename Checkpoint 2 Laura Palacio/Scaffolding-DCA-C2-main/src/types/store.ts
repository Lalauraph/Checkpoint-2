export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: [];
};

export enum Actions {
	'ADD_PRODUCT' = 'ADD_PRODUCT',
	'REMOVE_PRODUCT' = 'REMOVE_PRODUCT',
}