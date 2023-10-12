const express = require("express");
const path = require("path");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // requests to /service-worker.js
    server.get(
      "/service-worker.js",
      express.static(path.join(__dirname, ".next"))
    );
    //Ducle <ducle.sg@gmail.com >
    server.get(
      "/googled167fa7eb99b435c.html",
      express.static(path.join(__dirname, ""))
    );
    //relia <reliasoftware@gmail.com>
    server.get(
      "/google490bb7a34c31b77f.html",
      express.static(path.join(__dirname, ""))
    );
    server.get(
      "/sw.js",
      express.static(path.join(__dirname, ".next"))
    );

    // all other requests
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });