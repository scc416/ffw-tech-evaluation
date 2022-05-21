import { useContext } from "react";
import { StateContext } from "StateContext";
import TabList from "./TabList";
import { checkIfIsFonts } from "helpers";
import Instruction from "./Instruction";

const Header = () => {
  const { state } = useContext(StateContext);
  const showInstructions = checkIfIsFonts(state);

  return (
    <div className="Header">
      <TabList />
      {showInstructions && <Instruction />}
    </div>
  );
};

export default Header;
