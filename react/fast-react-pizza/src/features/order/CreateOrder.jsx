import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation=useNavigation()
  const isSubmitting=navigation.state==='submitting'
  const formErrors=useActionData()
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
{/* not neccesary to write path to which we want to send our form data in this case because react router automatically sends it to the closest matching route but i am writing it anyways */}
      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone&&<p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
        <div>
          <button disabled={isSubmitting}>{isSubmitting?"Placing Order":"Order now"}</button>
        </div>
      </Form>
    </div>
  );
}
export async function action ({request}) {
  const formData=await request.formData();
  const data=Object.fromEntries(formData)
  const order={
    ...data,
    priority:data.priority==="on",
    cart:JSON.parse(data.cart)

  }
  const errors={}
  if(!isValidPhone(order.phone)) errors.phone= "please provide a valid phone number!"
  if(Object.keys(errors).length>0) return errors
  const newOrder=await createOrder(order)
  return redirect(`/order/${newOrder.id}`)
}
export default CreateOrder;
