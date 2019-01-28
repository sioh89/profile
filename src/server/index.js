import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  StaticRouter,
  matchPath
} from "react-router-dom";
import routes from "../shared/routes";
import App from "../shared/App";
import ContextProvider from '../shared/ContextProvider';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const currentRoute = routes.find(route => matchPath(req.url, route));
  const contextForStaticRouter = {};
  const css = new Set();
  const contextForContextProvider = {
    insertCss: (...styles) => 
      styles.forEach(style => css.add(style._getCss()))
    };
  
  const markup = renderToString(
    <StaticRouter location={req.url} context={contextForStaticRouter}>
      <ContextProvider context={contextForContextProvider}>
        <App />
      </ContextProvider>
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
      <head>
        <title>Rich Oh</title>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400" rel="stylesheet">
        <style type="text/css">${[...css].join('')}</style>
      </head>
        
      <body>
        <div id="root">${markup}</div>
        <script src="/bundle.js" defer></script>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
