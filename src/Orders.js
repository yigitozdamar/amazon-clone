import React, { useEffect, useState } from "react";
import ".//Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  doc,
} from "firebase/firestore";
import Order from "./Order";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ref = collection(db, "users", user.uid, "orders");
      const orderedOrders = query(ref, orderBy("created", "desc"));
      onSnapshot(orderedOrders, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
