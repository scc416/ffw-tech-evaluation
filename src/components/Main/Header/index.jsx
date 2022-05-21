import { useContext } from "react";
import { StateContext } from "StateContext";
import TabList from "./TabList";
import { checkIfShowInstruction } from "helpers";

const Header = () => {
  const {
    state: { tabs, tabId },
  } = useContext(StateContext);

  const showInstructions = checkIfShowInstruction(tabs[tabId]);

  return (
    <div>
      <TabList />
    </div>
  );
};

export default Header;
