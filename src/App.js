import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KWLjtLV0RZcEEFr7vt8t07mCO3dCtcPb0cYESbPfGoR6zNuEG5yxgKEDau8PUBpYyIAkmMOFLDywB6KXO6GnjWf00jeZ7gIs1"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  // to listen to the user logged in
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    //will only run once when the app component loads
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
