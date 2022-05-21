const TabListItem = ({ label, clickHandler, active }) => {
  const className = active ? "tab active" : "tab";

  return <div {...{ className, onClick: clickHandler }}>{label}</div>;
};

export default TabListItem;
