## Create Context

./src/context/index.tsx

```
import React, {
  useContext,
  ReactElement,
  useReducer,
  useMemo,
  Dispatch
} from 'react';

type TCount = {
  value: number;
}

type Action =
  | { type: 'SET_COUNT', payload: TCount }

type State = {
  count: TCount;
  dispatch: Dispatch<Action>;
};

const INITIAL_STATE: State = {
  count: {
    value: 0,
  },
  dispatch: () => {},
};

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const Context = React.createContext<State>(INITIAL_STATE);

export const Store = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export const useStore = () => useContext(Context);
```

## Provider Store

./src/main.tsx

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Store } from './context/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Store>
      <App />
    </Store>
  </StrictMode>,
)
```

## Using Context Store

```
const { count, dispatch } = useStore();

dispatch({
  type: 'SET_COUNT',
  payload: {
    value: count.value + 1,
  },
});
```