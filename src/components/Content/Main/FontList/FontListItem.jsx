const FontListItem = ({
  abbr,
  color,
  colorBlindLabel,
  label,
  clickHandler,
  selected,
}) => {
  const className = selected ? "FontListItem selected" : "FontListItem";
  const accessKey = abbr[0].toLowerCase();
  return (
    <div {...{ className, accessKey, onClick: clickHandler }}>
      <div aria-label={colorBlindLabel} className="color-board">
        <div style={{ background: color }}>
          <span>{abbr}</span>
        </div>
      </div>
      <ul>
        <li>{label}</li>
      </ul>
    </div>
  );
};

export default FontListItem;
