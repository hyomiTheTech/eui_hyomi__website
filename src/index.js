import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
