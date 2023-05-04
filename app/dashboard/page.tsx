"use client";

import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchOrders = async () => {
    const res = await fetch("/api/get-orders");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  // console.log("line 28", orders);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (Object.keys(orders).length === 0)
    return <p className="justify-normal text-center">you have no orders yet</p>;
  return (
    <motion.div layout>
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg p-8 my-4 space-y-2 bg-base-200"
          >
            <h2 className="text-xs font-medium">Order reference: {order.id}</h2>
            <p className="text-xs">
              Payment Status:
              <span
                className={`${
                  order.status === "complete" ? "bg-teal-500" : "bg-orange-500"
                } text-white py-1 rounded-md px-2 mx-2 text-xs`}
              >
                {order.status}
              </span>
            </p>

            <p className="text-xs">
              Time: {new Date(order.createdDate).toString()}
            </p>
            <p className="text-xs">Shipping Address:</p>
            <p className="text-xs">
              <p>
                {order.firstName} {order.lastName}
              </p>
              <p>{order.address}</p>
              <p>{order.aptSuiteEtc}</p>
              <p>{order.city}</p>
              <p>{order.state}</p>
              <p>{order.zipCode}</p>
              <p>{order.country}</p>
            </p>
            <p>
              {order.trackingNumber == null ? (
                <p className="text-xs">
                  Shipment status:
                  <span className="text-xs bg-orange-500 text-white py-1 rounded-md px-2 mx-2">
                    Preparing for shipment
                  </span>
                </p>
              ) : (
                <p className="text-xs">
                  Shipment status:
                  <span className="text-xs bg-teal-500 text-white py-1 rounded-md px-2 mx-2">
                    Shipped
                  </span>
                  Tracking number: {order.trackingNumber}
                </p>
              )}
            </p>
            <div className="text-sm lg:flex items-center  gap-4">
              {order.products.map((product) => (
                <div className="py-2" key={product.id}>
                  <h2 className="py-2">{product.name}</h2>
                  <div className="flex items-baseline gap-4">
                    <Image
                      src={product.image!}
                      width={36}
                      height={36}
                      alt={product.name}
                      priority={true}
                      className="w-auto"
                    />
                    <p>{formatPrice(product.unit_amount)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-medium py-2">
              Total: {formatPrice(order.amount)}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
