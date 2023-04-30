"use client";

import { useState } from "react";

export default function ShippingForm() {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  return (
    <form>
      <h1 className="py-4 text-lg font-bold">Shipping information</h1>
      <div className="grid grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={shippingInfo.firstName}
          className="input input-bordered mr-1 mb-4"
          onChange={handleInputChange}
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
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          className="input input-bordered ml-1 mb-4"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="ZIP / Postal code"
          name="zipCode"
          value={shippingInfo.zipCode}
          className="input input-bordered mr-1 mb-4"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
