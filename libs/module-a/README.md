# Module A

A small, standalone, dependency-free CommonJS module that exposes a single
module-identification helper. It has no runtime dependencies, performs no I/O,
and produces no side effects.

This library is standalone and is **not** currently consumed by the `app`
server; it is provided purely as an in-scope example library. The
`libs/module-a/` directory is structured to represent a Git submodule, but the
local `.gitmodules` file is an empty placeholder — no Git submodule is actually
configured, and the files are tracked as regular files.

## API

### `getInfo()`

Returns identifying information for this module.

- **Parameters:** none.
- **Returns:** `string` — the value `"Module A"`.
- **Behavior:** synchronous. It takes no arguments, performs no I/O, and has no
  side effects (it is not asynchronous).

## Usage

The module uses CommonJS and exports a single function, `getInfo`:

```js
const { getInfo } = require("./index");

console.log(getInfo()); // "Module A"
```
