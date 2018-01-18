import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import {
  StaticRouter,
  matchPath
} from "react-router-dom";
import routes from "../shared/routes";
import App from "../shared/App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const currentRoute = routes.find(route => matchPath(req.url, route));
  const context = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
      <head>
        <title>Rich Oh</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400" rel="stylesheet">        <link rel="stylesheet" href="/css/main.css">
      </head>
        
      <body>
        <div id="root">${markup}</div>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="/bundle.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
            
        <nav id="creditFooter">
          <a id="creditFooterText" href="https://medialoot.com/item/night-sky-vector-backgrounds/" target="_blank">Background image credit to MediaLoot</a>
        </nav>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});
