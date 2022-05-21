import { useContext } from "react";
import "App.css";
import { StateContext } from "StateContext";
import Spin from "components/Spin";
import Main from "components/Main";

function App() {
  const {
    state: { loading },
  } = useContext(StateContext);

  return (
    <>
      {loading && <Spin />}
      {!loading && <Main />}
    </>
  );
}

export default App;
