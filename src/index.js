/** @format */

import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import React from "react";
import history from "./history";
import "./index.css";
import App from "./components/App";
import Blocks from "./components/Blocks";
import ConductTransaction from "./components/ConductTransaction";
import TransactionPool from "./components/TransactionPool";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      {/* <BrowserRouter> */}
      <Switch>
        <Route exact={true} path={"/"} component={App} />
        <Route path={"/blocks"} component={Blocks} />
        <Route path={"/conduct-transaction"} component={ConductTransaction} />
        <Route path={"/transaction-pool"} component={TransactionPool} />
      </Switch>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
