import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

const fakeCart = [
	{
		pizzaId: 12,
		name: 'Mediterranean',
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32,
	},
	{
		pizzaId: 6,
		name: 'Vegetale',
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13,
	},
	{
		pizzaId: 11,
		name: 'Spinach and Mushroom',
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15,
	},
];

function CreateOrder() {
	// const [withPriority, setWithPriority] = useState(false);
	const cart = fakeCart;

	return (
		<div>
			<h2>Ready to order? Let's go!</h2>

			{/* <Form method='POST' action='/order/new'> */}
			<Form method='POST'>
				<label>First Name</label>
				<div>
					<input type='text' name='customer' required />
				</div>

				<div>
					<label>Phone number</label>
					<div>
						<input type='tel' name='phone' required />
					</div>
				</div>

				<div>
					<label>Address</label>
					<div>
						<input type='text' name='address' required />
					</div>
				</div>

				<div>
					<input
						type='checkbox'
						name='priority'
						id='priority'
						// value={withPriority}
						// onChange={(e) => setWithPriority(e.target.checked)}
					/>
					<label htmlFor='priority'>Want to yo give your order priority?</label>
				</div>

				<div>
					<button>Order now</button>
				</div>

				<input type='hidden' name='cart' value={JSON.stringify(cart)} />
			</Form>
		</div>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === 'on' ? true : false,
	};

	const newOrder = await createOrder(order);
	console.log(newOrder);

	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
