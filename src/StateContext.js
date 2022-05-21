import React, { useReducer } from "react";
import { initialState } from "constants";

const StateContext = React.createContext({ state: initialState });

const StateProvider = (props) => {
  const reducers = {
    ["HELLO"](state, { opponent }) {
      return state;
    },
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
