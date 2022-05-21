import { useContext } from "react";
import { StateContext } from "StateContext";
import TabListItem from "./TabListItem";

const TabList = () => {
  const {
    state: { tabs, tabId },
    tabClickHandler,
  } = useContext(StateContext);

  const lst = tabs.map(({ label }, i) => (
    <TabListItem
      {...{
        label,
        key: i,
        clickHandler: () => tabClickHandler(i),
        active: i === tabId,
      }}
    />
  ));
  return <nav>{lst}</nav>;
};

export default TabList;
