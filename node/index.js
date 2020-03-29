const http = require("http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Welcome to node!");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(port, () => {
  console.log(`🚀  API running at http://localhost:${port}`);
});
