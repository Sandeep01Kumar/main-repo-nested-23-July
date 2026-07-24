# main-repo

A simple Node.js server project used to test Git submodules and nested Git
submodules. The HTTP server is built on [Express.js](https://expressjs.com/)
(`^5.2.1`) and uses CommonJS modules (`require`).

## Getting Started

The server lives in the [`app/`](app/) directory and is launched with
`npm start`, which runs `node index.js`. Express is a runtime dependency, so
install the dependencies before starting the server:

```bash
cd app
npm install
npm start
```

Once started, the server listens on port `3000` and prints the following line
on startup:

```
Server running on http://localhost:3000
```

The root endpoint is then available at <http://localhost:3000>.

## Endpoints

Every response is sent as plain text (`Content-Type: text/plain`).

| Method | Path            | Status | Response body  |
| ------ | --------------- | ------ | -------------- |
| `GET`  | `/`             | `200`  | `Hello World`  |
| `GET`  | `/good-evening` | `200`  | `Good evening` |

Any other path returns `404` with the plain-text body `Not Found`.

## Project structure

- **`app/`** — the Express HTTP server application. The entry point is
  [`app/index.js`](app/index.js) and the package manifest is
  [`app/package.json`](app/package.json).
- **`libs/module-a/`** — an in-scope submodule/library that exposes a single
  function, `getInfo()`, which returns the string `Module A`. It is a
  standalone CommonJS library and is **not** currently consumed by the `app`
  server.

The repository is structured to represent Git submodules — a `.gitmodules`
file is present both at the repository root and inside `libs/module-a/`. These
files are currently empty placeholders, so no Git submodule is actually
configured; the `libs/module-a/` directory is tracked as regular files.
