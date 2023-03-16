export const fetcher = (url: RequestInfo | URL) =>
  fetch(url, {
    headers: {
      "Cache-Control": "max-age=3600",
    },
  }).then((r) => r.json());
