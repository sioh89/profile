import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../shared/App";
import ContextProvider from '../shared/ContextProvider';

const context = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  }
}

render(
<BrowserRouter>
  <ContextProvider context={context}>
    <App />
  </ContextProvider>
</BrowserRouter>
, document.getElementById("root"));
