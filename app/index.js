const express = require("express");

const app = express();

/**
 * Handles GET requests to the root path ("/").
 * Responds with HTTP 200 and the plain-text body "Hello World".
 * @param {import("express").Request} req - The incoming HTTP request.
 * @param {import("express").Response} res - The HTTP response used to send the greeting.
 * @returns {void}
 */
app.get("/", (req, res) => {
  res.type("text/plain").send("Hello World");
});

/**
 * Handles GET requests to "/good-evening".
 * Responds with HTTP 200 and the plain-text body "Good evening".
 * @param {import("express").Request} req - The incoming HTTP request.
 * @param {import("express").Response} res - The HTTP response used to send the greeting.
 * @returns {void}
 */
app.get("/good-evening", (req, res) => {
  res.type("text/plain").send("Good evening");
});

/**
 * Finalizing not-found middleware for any unmatched route.
 * Responds with HTTP 404 and the plain-text body "Not Found", preserving the original
 * core-http behavior instead of Express's default HTML "Cannot GET <path>" 404 response.
 * @param {import("express").Request} req - The incoming HTTP request for an unmatched path.
 * @param {import("express").Response} res - The HTTP response used to send the 404 body.
 * @returns {void}
 */
app.use((req, res) => {
  res.status(404).type("text/plain").send("Not Found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
