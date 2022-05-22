const TabListItem = ({ label, clickHandler, active, accessKey }) => {
  const className = active ? "tab active" : "tab";

  return (
    <div {...{ className, accessKey, onClick: clickHandler }}>{label}</div>
  );
};

export default TabListItem;
