import axios from "axios";
import React, { useReducer, useEffect } from "react";
import { initialState, SHOW_ERROR, FETCHED_TABS } from "constants";

const StateContext = React.createContext({ state: initialState });

const StateProvider = (props) => {
  const reducers = {
    [SHOW_ERROR](state, { payload: { error } }) {
      return { ...state, error };
    },
    [FETCHED_TABS](state, { payload: { tabs } }) {
      return { ...state, tabs };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const tabs = {};
        const { data } = await axios.get("/tabs");
        for (const tab of data) {
          const { label, content_endpoint } = tab;
          const {
            data: { content },
          } = await axios.get(`/${content_endpoint}`);
          tabs[label] = content;
        }
        dispatch({ type: FETCHED_TABS, payload: { tabs } });
      } catch (error) {
        dispatch({ type: SHOW_ERROR, payload: { error } });
      }
    })();
  }, []);

  return (
    <StateContext.Provider value={{ state }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
