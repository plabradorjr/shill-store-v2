import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function ShippingForm() {
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    zipCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if the order already exists
    const existingOrder = await prisma.order.findUnique({
      where: { shippingInfo },
    });
    if (existingOrder) {
      // If the order already exists, update it
      const updatedOrder = await prisma.order.update({
        where: { id: existingOrder.id },
        data: { shippingInfo },
      });
      console.log("Order updated:", updatedOrder);
    } else {
      // If the order doesn't exist, create a new one
      const newOrder = await prisma.order.create({
        data: { shippingInfo },
      });
      console.log("New order created:", newOrder);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={shippingInfo.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={shippingInfo.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={shippingInfo.address}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={shippingInfo.country}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={shippingInfo.zipCode}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ShippingForm;
