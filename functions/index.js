const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    `private key`,
);

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create/", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
