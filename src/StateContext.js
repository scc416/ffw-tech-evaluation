import axios from "axios";
import React, { useReducer, useEffect } from "react";
import { initialState, SHOW_ERROR, FETCH_DATA, CLICK_TAB } from "constants";

const StateContext = React.createContext({ state: initialState });

const StateProvider = (props) => {
  const reducers = {
    [SHOW_ERROR](state, { payload: { error } }) {
      return { ...state, error };
    },
    [FETCH_DATA](state, { payload: { tabs } }) {
      return { ...state, tabs };
    },
    [CLICK_TAB](state, { payload: { tabId } }) {
      return { ...state, tabId };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const tabs = [];
        const { data } = await axios.get("/tabs");
        for (const tab of data) {
          const { label, content_endpoint } = tab;
          const {
            data: { content },
          } = await axios.get(`/${content_endpoint}`);
          const details = { content, label };
          tabs.push(details);
        }
        console.log(tabs);
        dispatch({ type: FETCH_DATA, payload: { tabs } });
      } catch (error) {
        dispatch({ type: SHOW_ERROR, payload: { error } });
      }
    })();
  }, []);

  const tabClickHandler = (tabId) => {
    dispatch({ type: CLICK_TAB, payload: { tabId } });
  };

  return (
    <StateContext.Provider value={{ state, tabClickHandler }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
