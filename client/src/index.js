import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
//dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getUsers } from "./actions/users.actions";
import App from "./App";
import rootReducer from "./reducers";
import "./styles/index.scss";
import allPostsReducer from "./reducers/allPosts.reducer";
import {getPosts} from "./actions/post.actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());
store.dispatch(getPosts());


ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
