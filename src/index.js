import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Abc, { sampleFn as fn } from "./App";
import store from "./app/storeOne";
import { Provider } from "react-redux";

fn();

ReactDOM.render(
    <Provider store={store}>
        <Abc />
    </Provider>,
    document.getElementById("root")
);
