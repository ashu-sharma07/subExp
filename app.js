import express from "express";

const app = express();

app.use(express.json());

app.get("/app", (req, res) => {
  res.send("App is working");
});

app.get("/app/payment", (req, res) => {
  res.send("Payment is working");
});

app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
