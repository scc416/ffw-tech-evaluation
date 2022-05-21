import { useContext } from "react";
import "App.css";
import { StateContext } from "StateContext";

function App() {
  const { state } = useContext(StateContext);

  return <>hello{state.loading && "LOADING"}</>;
}

export default App;
