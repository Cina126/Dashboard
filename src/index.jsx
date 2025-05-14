import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App/App";
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <HashRouter>
    <App></App>
  </HashRouter>
);

