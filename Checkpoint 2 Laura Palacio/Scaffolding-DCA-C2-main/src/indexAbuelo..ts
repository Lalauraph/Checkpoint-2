import './components/ProductForm/index';
import './components/ProductList/index';
import './components/ProductItem/index';
import { addObserver } from './store/store.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<product-form></product-form>
			<product-list></product-list>
			`;
		}
	}
}

customElements.define('app-container', AppContainer);