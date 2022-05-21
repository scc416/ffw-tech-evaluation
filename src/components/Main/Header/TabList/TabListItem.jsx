const TabListItem = ({ label, clickHandler }) => {
  return <div onClick={clickHandler}>{label}</div>;
};

export default TabListItem;
