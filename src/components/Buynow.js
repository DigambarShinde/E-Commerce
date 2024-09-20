import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

// Mock product data
const productsData = [
  { id: 1, name: "Product 1", price: "$20" },
  { id: 2, name: "Product 2", price: "$35" },
  { id: 3, name: "Product 3", price: "$50" },
  { id: 4, name: "Product 4", price: "$75" },
  { id: 5, name: "Product 5", price: "$45" },
  { id: 6, name: "Product 6", price: "$75" },
  { id: 7, name: "Product 7", price: "$95" }
];

export default function BuyNow() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(productId));

  const handleBuyNow = async () => {
    try {
      const requestData = {
        productId: productId,
        quantity: 1,
      };

      // Sending POST request with credentials to ensure cookies (JWT) are sent
      const response = await axios.post('https://reqres.in/api/users', requestData, {
        withCredentials: true, // Ensures the JWT cookie is sent
      });

      if (response.status === 200) {
        alert('Purchase Complete!');
        navigate('/dashboard'); // Redirect to dashboard after successful purchase
      }
    } catch (error) {
      // If session has expired or is unauthorized
      if (error.response && error.response.status === 401) {
        alert('Your session has expired. Please log in again.');
        navigate('/login'); // Redirect to login page
      } else {
        console.error('Error during purchase:', error); // Log any other errors
      }
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Buy Now - {product.name}
      </Typography>
      <Typography variant="h5" component="div" align="center">
        Price: {product.price}
      </Typography>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="contained" color="primary" onClick={handleBuyNow}>
          Complete Purchase
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoBack}
          style={{ marginLeft: "10px" }}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
