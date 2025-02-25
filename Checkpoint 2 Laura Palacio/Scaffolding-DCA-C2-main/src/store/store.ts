import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';
import Storage from '../utils/storage';

const emptyState: AppState = {
	products: [],
};

export let appState = Storage.get<AppState>({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) => Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	notifyObservers();
};

export const addObserver = (ref: Observer) => {
	observers = [...observers, ref];
};