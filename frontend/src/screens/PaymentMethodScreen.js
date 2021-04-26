import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

function PaymentMethodScreen(props) {
  // Checking if user passed shipping address steps
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  //   Creating dispatch
  const dispatch = useDispatch();
  // Handling form submission
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));

    // redirecting user to order placement
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              checked
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button type="submit" className="primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;
