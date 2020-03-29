const fastify = require("fastify");

const app = fastify();
const port = Number(process.env.PORT) || 3000;

app.get("/", (request, reply) => {
  reply.send("Welcome to fastify!");
});

app.setNotFoundHandler((request, reply) => {
  reply.status(404).send(`Cannot ${request.req.method} ${request.req.url}`);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀  API running at http://localhost:${port}`);
});
