const FontListItem = ({
  abbr,
  color,
  colorBlindLabel,
  label,
  clickHandler,
  selected,
}) => {
  const className = selected ? "FontListItem selected" : "FontListItem";

  return <div {...{ className, onClick: clickHandler }}>{abbr}</div>;
};

export default FontListItem;
