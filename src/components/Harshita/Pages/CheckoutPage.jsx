import React from "react";
import Checkout from "../components/Checkout";
const CheckoutPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-black">
      <div className="flex justify-center items-center py-5">
        <Checkout />
      </div>
    </div>
  );
};

export default CheckoutPage;
