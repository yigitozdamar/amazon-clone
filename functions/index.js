/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { StayPrimaryLandscapeTwoTone } = require("@material-ui/icons");
const stripe = require("stripe")(
  "sk_test_51KjoZRIOcRxYzaPvgcDr66CReJmWuZlM3d4FVWxrCPii1stE8j7GTSgY47d4Gldlt966c8xuPhJYbSyRQxXQ0UUb00q46TRFlt"
);

// API

// APP Config
const app = express();

// Middleware - CORS
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //OK - Created
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-9e34a/us-central1/api
