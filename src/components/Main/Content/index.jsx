import { useContext } from "react";
import { StateContext } from "StateContext";
import { checkIfIsFonts } from "helpers";
import FontList from "./FontList";

const Content = () => {
  const {
    state: { tabs, tabId },
    fontClickHandler,
  } = useContext(StateContext);

  const details = tabs[tabId];
  const isFonts = checkIfIsFonts(details);
  const { content } = details;
  return (
    <div className="Content">
      {isFonts && <FontList {...{ content, fontClickHandler }} />}
      {!isFonts && content}
    </div>
  );
};

export default Content;
