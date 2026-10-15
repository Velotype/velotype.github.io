# Known limitations

* **The component tree covers only the top frame.** Components rendered inside an `<iframe>` are not merged into the tree
* **The Events panel is a registration snapshot, not a live trace.** It does not log events as they fire. A trace needs a small hook in `emitEvent()` itself, which Velotype does not include to keep its bundle small. The snapshot covers most debugging needs: leaked listeners, and whether anything is listening on a key
* **Request body decoding is best-effort.** Chrome's DevTools extension API only gives a request's `postData` as text, which can be lossy for binary bodies depending on the Chrome version. Response bodies are reliable, because the API says whether the content is base64 binary. Use the manual decode tool for a request payload that does not decode automatically
* **VSON and VBIN detection on the network tab uses the Content-Type only.** There is no fallback that looks at the bytes of a body with no content type, such as `application/octet-stream`. Use the manual decode tool for those
* **VBIN is decoded in the debug format only,** with KeyIDs as keys. See [VeloJSON](/docs/velodevtools/panels/#velojson)
