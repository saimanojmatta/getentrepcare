const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const FormData = require("form-data");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

// Create a payment request
app.post("/create-payment", async (req, res) => {
  const { amount, purpose, buyer_name, email, phone } = req.body;

  const form = new FormData();
  form.append("purpose", purpose);
  form.append("amount", amount);
  form.append("buyer_name", buyer_name);
  form.append("email", email);
  form.append("phone", phone);
  form.append("redirect_url", "http://localhost:5173/payment-status");
  form.append(
    "webhook",
    "https://webhook.site/bb97ae83-a108-4c27-89b7-f2387ab95a6b"
  );
  form.append("allow_repeated_payments", "False");

  const config = {
    method: "post",
    url: "https://test.instamojo.com/v2/payment_requests/",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      ...form.getHeaders(),
    },
    data: form,
  };

  try {
    const response = await axios.request(config);
    const longurl = response.data.longurl;
    res.json({ longurl });
  } catch (error) {
    console.error("Error creating payment request:", error);
    res.status(500).send("Something went wrong");
  }
});

// Check payment status
app.get("/payment-status", async (req, res) => {
  const payment_request_id = req.query.payment_request_id;

  try {
    const response = await axios.get(
      `https://test.instamojo.com/api/v2/payment_requests/${payment_request_id}/`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const paymentRequest = response.data.payment_request;

    if (paymentRequest.status === "Failed") {
      res.redirect("http://localhost:5173/payment-status?status=failed");
    } else {
      res.redirect("http://localhost:5173/payment-status?status=success");
    }
  } catch (error) {
    console.error("Error verifying payment status:", error);
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
