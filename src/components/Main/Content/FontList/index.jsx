import FontListItem from "./FontListItem";

const FontList = ({ content, fontClickHandler }) => {
  const lst = content.map((font, i) => (
    <FontListItem
      {...{ ...font, key: i, clickHandler: (i) => fontClickHandler(i) }}
    />
  ));

  return <>{lst}</>;
};

export default FontList;
