import express from "express";
import FoodItems from "./Data/FoodItems.js";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/foodItems", (req, res) => {
  res.json(FoodItems);
});

app.get("/api/foodItems/:id", (req, res) => {
  const foodItem = FoodItems.find((f) => f.id === req.params.id);
  res.json(foodItem);
});

app.listen(port, () => console.log(`Server running on ${port}`));
