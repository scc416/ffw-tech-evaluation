import { useContext } from "react";
import { StateContext } from "StateContext";
import TabList from "./TabList";
import { checkIfShowInstruction } from "helpers";
import Instruction from "./Instruction";

const Header = () => {
  const {
    state: { tabs, tabId },
  } = useContext(StateContext);

  const showInstructions = checkIfShowInstruction(tabs[tabId]);

  return (
    <div className="Header">
      {showInstructions && <Instruction />}
      <TabList />
    </div>
  );
};

export default Header;
