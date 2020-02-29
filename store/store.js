import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const dev = process.env.NODE_ENV !== "production";

export default (state = {}) => {
  const middlewares = dev ? [thunkMiddleware, createLogger()] : [];
  return createStore(reducers, state, compose(applyMiddleware(...middlewares)));
};
