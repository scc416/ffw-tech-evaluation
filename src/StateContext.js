import { useReducer, useEffect, createContext } from "react";
import {
  initialState,
  SHOW_ERROR,
  FETCH_DATA,
  CLICK_TAB,
  CLICK_FONT,
} from "constants";
import { fetchData } from "helpers";

const StateContext = createContext({ state: initialState });

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
    [CLICK_FONT](state, { payload: { fontId } }) {
      return { ...state, fontId };
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  const tabClickHandler = (tabId) => {
    dispatch({ type: CLICK_TAB, payload: { tabId } });
  };

  const fontClickHandler = (fontId) => {
    dispatch({ type: CLICK_FONT, payload: { fontId } });
  };

  return (
    <StateContext.Provider value={{ state, tabClickHandler, fontClickHandler }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
