const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();

app.use(require("koa-static")("static"));

app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next();
});

router.get("/", async (ctx, next) => {
  ctx.body = "hello";
  await next();
});

router.get("/api/user", async (ctx, next) => {
  ctx.body = { name: "kk", age: 30 };
  await next();
});

router.get("/api/users", async (ctx, next) => {
  ctx.body = [
    { name: "zzzz", age: 50 },
    { name: "sss", age: 50 },
    { name: "kk", age: 30 },
    { name: "ff", age: 30 },
    { name: "tt", age: 0 },
  ];
  await next();
});

// 启动路由
app.use(router.routes());

const port = 3000;
app.listen(port, () => {
  console.log(`koa-auto ${port} 启动了`);
});
