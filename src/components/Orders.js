import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import {
  doc,
  query,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      //const colRef = getDocs(collectionGroup(db, "orders"));
      //const ref = doc(db, "users", user?.uid);

      // const docRef = doc(db, "users", user?.uid);
      // const docSnap = getDocs(collection(docRef, "orders"));
      // const ref = doc(db, "users", user?.uid, "orders", paymentIntent.id);

      const ref = collection(db, "users", user?.uid, "orders");
      const orderedOrders = query(ref, orderBy("created", "desc"));
      onSnapshot(orderedOrders, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // db.collection("users")
      //   .doc(user?.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) => {
      //     setOrders(
      //       snapshot.docs.map((doc) => ({
      //         id: doc.id,
      //         data: doc.data(),
      //       }))
      //     );
      //   });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your orders</h1>

        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
