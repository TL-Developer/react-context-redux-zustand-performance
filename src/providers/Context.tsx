import { createContext, useContext, useReducer } from "react";
import { Action, State } from "../types";

export const  INITIAL_VALUE: State = {
  count: {
    value: 0,
  },
  dispatch: () => {},
};

const Context = createContext(INITIAL_VALUE);

const Reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: {
          value: state.count.value + 1,
        },
      };
    default:
      return state;
  }
};

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_VALUE);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStoreContext = () => useContext(Context);