const http = require("http");
const { test } = require("node:test");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<h1>hello</h1>");
  res.end();
});

server.listen(3000);
