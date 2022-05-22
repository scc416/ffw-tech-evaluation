const FontListItem = ({
  abbr,
  color,
  colorBlindLabel,
  label,
  clickHandler,
  selected,
}) => {
  const className = selected ? "FontListItem selected" : "FontListItem";

  return (
    <div {...{ className, onClick: clickHandler }}>
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
