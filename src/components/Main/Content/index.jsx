import { useContext } from "react";
import { StateContext } from "StateContext";

const Content = () => {
  const {
    state: { tabs, tabId }
  } = useContext(StateContext);

  return <div></div>;
};

export default Content;
