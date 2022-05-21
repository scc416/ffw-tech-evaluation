const FontListItem = ({
  abbr,
  color,
  colorBlindLabel,
  label,
  clickHandler,
}) => {
  return (
    <div className="FontListItem" onClick={clickHandler}>
      {abbr}
    </div>
  );
};

export default FontListItem;
