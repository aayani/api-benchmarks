const http = require("http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Hello world from node!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(port, () => {
  console.log(`🚀  Server running at http://localhost:${port}`);
});
