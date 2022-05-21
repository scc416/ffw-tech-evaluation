import { useContext } from "react";
import { StateContext } from "StateContext";
import { checkIfIsFonts } from "helpers";
import FontList from "./FontList";
import TextBox from "./TextBox";

const Content = () => {
  const { state } = useContext(StateContext);
  const { tabs, tabId } = state;

  const isFonts = checkIfIsFonts(state);
  const { content } = tabs[tabId];
  
  return (
    <div className="Content">
      {isFonts && <FontList content={content} />}
      {!isFonts && <TextBox text={content}/>}
    </div>
  );
};

export default Content;
