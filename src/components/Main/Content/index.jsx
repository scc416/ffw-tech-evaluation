import { useContext } from "react";
import { StateContext } from "StateContext";
import { checkIfIsFonts } from "helpers";

const Content = () => {
  const {
    state: { tabs, tabId },
  } = useContext(StateContext);

  const details = tabs[tabId];
  const isFonts = checkIfIsFonts(details);
  const { content } = details;
  return (
    <div className="Content">
      {isFonts && content.map((x) => <div key={x.id}>{x.id}</div>)}
      {!isFonts && content}
    </div>
  );
};

export default Content;
