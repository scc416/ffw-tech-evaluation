const TabListItem = ({ label, clickHandler, active, accesskey }) => {
  const className = active ? "tab active" : "tab";

  return (
    <div {...{ className, onClick: clickHandler, accesskey }}>{label}</div>
  );
};

export default TabListItem;
