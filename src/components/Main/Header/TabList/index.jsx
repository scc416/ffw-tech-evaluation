import { useContext } from "react";
import { StateContext } from "StateContext";
import TabListItem from "./TabListItem";

const TabList = () => {
  const {
    state: { tabs },
    tabClickHandler,
  } = useContext(StateContext);

  const lst = tabs.map(({ label }, i) => (
    <TabListItem
      {...{ label, key: label, clickHandler: () => tabClickHandler(i) }}
    />
  ));
  return <div className="TabList">{lst}</div>;
};

export default TabList;
