import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import App from "./components/App";
import counterReducer from "./reducers/counterReducer";
import loggerMiddleware from "./middlewares/loggerMiddleware";

const spaStore = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, logger))
);

ReactDOM.render(
  <Provider store={spaStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
