# Browser module

`@velotype/velojson/browser` is the same format in a smaller module, about 4.3kb minified. It supports only the Key Table format, which `VSON.encode()` uses for an object or an Array, so it has no encoding format argument, and no VBIN writers or mapper.

Its `VSON.decode()` reads Key Table data. Its output is the same bytes as the server module's, so either side can decode what the other encodes.

@example browser.ts

Output:

@output browser.ts

Use it for sending data to a server and reading a server's responses in a browser, with the [Velotype DevTools](/docs/velotype/devtools/) extension to inspect them.
