import { addProduct} from '../../store/actions';
import { appState } from '../../store/store';
import { Product} from '../../types/product';
import { dispatch } from '../../store/store';

class TaskForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<h2>JuaneStore/h2>
			<form class="product-form">
			<input type="text" id="product-input" placeholder="nombre del producto" required>
			<button type="submit" id="add-btn">Agregar</button>
			</form>
			`;
		}
		const productForm = this.shadowRoot?.querySelector('.product-form') as HTMLFormElement;
		productForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const productInput = this.shadowRoot?.querySelector('#producy-input') as HTMLInputElement;
			const productName = taskInput.value;
			const newProduct: Product = {
				
			};

			dispatch(addProduct(newProduct));
			console.log(appState);
		});
	}
}

customElements.define('task-form', TaskForm);
export default TaskForm;