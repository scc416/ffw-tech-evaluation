import { useContext } from "react";
import { StateContext } from "StateContext";
import FontListItem from "./FontListItem";

const FontList = ({ content }) => {
  const {
    state: { fontId },
    fontClickHandler,
  } = useContext(StateContext);

  const lst = content.map((font, i) => (
    <FontListItem
      {...{
        ...font,
        key: i,
        clickHandler: () => fontClickHandler(i),
        selected: fontId === i,
      }}
    />
  ));

  return <div className="FontList">{lst}</div>;
};

export default FontList;
