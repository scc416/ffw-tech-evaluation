import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateContext, StateProvider } from "./StateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
