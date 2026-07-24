const express = require("express");

const app = express();

// Disable Express's default ETag generation so responses carry no ETag, exactly
// as the original core-`http` server behaved. With ETags enabled, a successful
// GET (200) advertises a weak ETag and a subsequent conditional request that
// echoes it back in `If-None-Match` is answered with an empty `304 Not Modified`
// (no body, no Content-Type). Disabling ETag guarantees the exact `200` +
// plain-text body contract holds for every request to "/" and "/good-evening",
// including cache-revalidating clients and repeat browser navigations.
app.disable("etag");

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

/**
 * Starts the HTTP server on port 3000, logging the startup line once the socket is bound.
 *
 * Express 5's `app.listen` wraps this callback with `once` and registers it for BOTH the
 * underlying server's "listening" and "error" events, so the callback receives the bind
 * error as its first argument when the port cannot be acquired. Guarding on `err` preserves
 * the original core-`http` lifecycle: a failed bind (e.g. EADDRINUSE when port 3000 is
 * already in use) reports the error on stderr and exits with a non-zero status, rather than
 * silently printing a false "Server running" line and exiting 0.
 *
 * @param {Error} [err] - The bind error; present only when startup fails, undefined on success.
 * @returns {void}
 */
app.listen(3000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
    return;
  }
  console.log("Server running on http://localhost:3000");
});
