import { useContext } from "react";
import "App.css";
import { StateContext } from "StateContext";
import Spin from "components/Spin";

function App() {
  const { state } = useContext(StateContext);

  return <>{state.loading && <Spin />}</>;
}

export default App;
