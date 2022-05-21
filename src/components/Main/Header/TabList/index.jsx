import { useContext } from "react";
import { StateContext } from "StateContext";
import TabListItem from "./TabListItem";

const TabList = () => {
  const {
    state: { tabs },
  } = useContext(StateContext);

  const lst = tabs.map(({ label }) => (
    <TabListItem {...{ label, key: label }} />
  ));
  return <div className="TabList">{lst}</div>;
};

export default TabList;
