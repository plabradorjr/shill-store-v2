"use client";

import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import formatPrice from "@/util/PriceFormat";
import { useCartStore } from "@/store";

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const cartStore = useCartStore();

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);
  const formattedPrice = formatPrice(totalPrice);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const isFormValid = () => {
    const requiredFields = [
      "firstName",
      "country",
      "address",
      "city",
      "state",
      "zipCode",
    ];
    return requiredFields.every((field) => shippingInfo[field] !== "");
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const paymentIntentID = cartStore.paymentIntent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // UPDATE shipping address upon submit
    try {
      const response = await fetch("/api/update-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentID,
          ...shippingInfo,
        }),
      });
      const data = await response.json();
      console.log(data);

      // Handle STRIPE payment
      if (!stripe || !elements) {
        return;
      }
      setIsLoading(true);

      stripe
        .confirmPayment({
          elements,
          redirect: "if_required",
        })
        .then((result) => {
          if (!result.error) {
            cartStore.setCheckout("success");
          }
          setIsLoading(false);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form" className="pb-20">
      {/* SHIPPING FORM */}
      <div>
        <h1 className="text-lg font-bold">Shipping information</h1>
        <p className="pb-4 text-xs">(All fields are required before paying)</p>
        <div className="grid grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={shippingInfo.firstName}
            className="input input-bordered mr-1 mb-4"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={shippingInfo.lastName}
            className="input input-bordered ml-1 mb-4"
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={shippingInfo.country}
            className="input input-bordered mr-1 mb-4"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={shippingInfo.address}
            className="input input-bordered mb-4"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc."
            name="apartment"
            value={shippingInfo.apartment}
            className="input input-bordered mb-4"
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={shippingInfo.city}
            className="input input-bordered mr-1 mb-4"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={shippingInfo.state}
            className="input input-bordered ml-1 mb-4"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="ZIP / Postal code"
            name="zipCode"
            value={shippingInfo.zipCode}
            className="input input-bordered mr-1 mb-4"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* PAYMENT INFORMATION || STRIPE */}

      <h1 className="pt-5 text-lg font-bold">Payment information</h1>
      <h1 className="pb-2 text-xs">(Powered by Stripe)</h1>
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
      <h1 className="py-4 text-sm font-bold text-green-500 ">
        Total: {formattedPrice}
      </h1>

      <button
        className={`py-2 mt-4  w-full bg-primary rounded-md text-white disabled:opacity-25`}
        id="submit"
        disabled={!isFormValid() || isLoading || !stripe || !elements}
      >
        <span id="button-text">
          {isLoading ? <span>Processing 👀</span> : <span>Pay now 🔥</span>}
        </span>
      </button>
    </form>
  );
}
