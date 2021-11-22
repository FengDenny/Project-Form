import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { HashRouter as Router } from "react-router-dom";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = composeWithDevTools(applyMiddleware(thunk))(createStore)(
  persistedReducer
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
