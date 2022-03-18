import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxStore from "./store/reduxStore";

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
