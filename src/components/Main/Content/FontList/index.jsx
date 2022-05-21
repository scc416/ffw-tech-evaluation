import FontListItem from "./FontListItem";

const FontList = ({ content }) => {
  const lst = content.map((font, i) => (
    <FontListItem {...{ ...font, key: i }} />
  ));

  return <>{lst}</>;
};

export default FontList;
