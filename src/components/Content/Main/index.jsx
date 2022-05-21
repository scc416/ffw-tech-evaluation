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
    <main>
      {isFonts && <FontList content={content} />}
      {!isFonts && <TextBox text={content}/>}
    </main>
  );
};

export default Content;
