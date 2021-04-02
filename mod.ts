/// <reference path="./deployctl.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response("Laravel is the best php framework!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
