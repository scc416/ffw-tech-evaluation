import "App.css";
import { useContext } from "react";
import { StateContext } from "StateContext";
import Spin from "components/Spin";
import Main from "components/Content";
import Error from "components/Error";

const App = () => {
  const {
    state: { tabs, error },
    keyDownHandler,
  } = useContext(StateContext);

  return (
    <div onKeyDown={keyDownHandler} tabIndex="0">
      {!tabs && !error && <Spin />}
      {tabs && <Main />}
      {error && <Error error={error} />}
    </div>
  );
};

export default App;
