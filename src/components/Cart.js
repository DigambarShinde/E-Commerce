import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
    // Add checkout logic here
  };

  return (
    <div>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Cart
      </Typography>
      {cart.length > 0 ? (
        <div>
          {cart.map((product, index) => (
            <div key={index}>
              <Typography variant="h6">
                {product.name} - {product.price}
              </Typography>
            </div>
          ))}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <Typography variant="h6" align="center">
          Your cart is empty
        </Typography>
      )}
    </div>
  );
}
