import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const productsData = [
  { id: 1, name: "Product 1", price: "$20" },
  { id: 2, name: "Product 2", price: "$35" },
  { id: 3, name: "Product 3", price: "$50" },
  { id: 4, name: "Product 4", price: "$75" },
  { id: 5, name: "Product 5", price: "$45" },
  { id: 6, name: "Product 6", price: "$75" },
  { id: 7, name: "Product 7", price: "$95" },
  { id: 8, name: "Product 7", price: "$95" },
  { id: 9, name: "Product 7", price: "$95" }
];

export default function Dashboard() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`${product.name} added to cart`);
    navigate("/cart"); // Navigate to the cart page
  };

  const handleBuyNow = (product) => {
    console.log(`Buying ${product.name} now!`);
    navigate(`/buy-now/${product.id}`); // Navigate to the Buy Now page with productId
  };

  return (
    <div>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {productsData.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleBuyNow(product)}
                  style={{ margin: "10px" }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
