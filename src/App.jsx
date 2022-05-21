import { useContext } from "react";
import "App.css";
import { StateContext } from "StateContext";
import Spin from "components/Spin";
import Main from "components/Main";
import Error from "components/Error";

const App = () => {
  const {
    state: { tabs, error },
  } = useContext(StateContext);

  return (
    <>
      {!tabs && !error && <Spin />}
      {tabs && <Main />}
      {error && <Error error={error} />}
    </>
  );
};

export default App;
