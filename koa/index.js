const Koa = require("koa");

const app = new Koa();
const port = Number(process.env.PORT) || 3000;

app.use(ctx => {
  if (ctx.url === "/") {
    ctx.body = "Welcome to koa!";
  } else {
    ctx.status = 404;
    ctx.body = `Cannot ${ctx.method} ${ctx.url}`;
  }
});

app.listen(port, () => {
  console.log(`🚀  API running at http://localhost:${port}`);
});
