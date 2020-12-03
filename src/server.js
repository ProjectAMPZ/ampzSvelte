import sirv from "sirv";
// import polka from 'polka';
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import { authenticationMiddleware } from "./lib/auth";
import { apiUrl } from "./config";

let { PORT, NODE_ENV, API_URL } = process.env;

const proxy = require("http-proxy-middleware");
const apiProxy = proxy("/api", {
  target: API_URL || apiUrl,
  changeOrigin: true
});
const imgProxy = proxy("/images", {
  target: API_URL || apiUrl,
  changeOrigin: true
});

let dev = NODE_ENV === "development";
let app = express();


// app.use(async function(req, res, next) {
//   if (req) {
//     if (req.headers["x-forwarded-proto"] !== "https") {
//       return res.redirect(
//         301,
//         "https://" + req.hostname + req.originalUrl
//       );
//     }
//     next();
//   } else {
//     next();
//   }
// });

app
  .use(
    compression({ threshold: 0 }),

    sirv("static", { dev }),
    apiProxy,
    imgProxy,
    // authenticationMiddleware,
    sapper.middleware({
      session: (req, res) => ({
        user: req.user || {},
        token: req.token,
        cart: req.cart || {},
        settings: req.settings || {}
      })
    })
  )

  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
