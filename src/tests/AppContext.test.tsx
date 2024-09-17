import React, { act, Dispatch, useEffect } from "react";
import {  render } from '@testing-library/react';
import { StoreContextProvider, useStoreContext } from "../providers/Context";
import { Action } from "../types";

global.React = React;

const TestComponent = ({ onDispatch }) => {
  const { dispatch } = useStoreContext();
  
  useEffect(() => {
    onDispatch(dispatch);
  }, [dispatch, onDispatch]);

  return null;
};

test('performance test Context API', () => {
  let dispatch: Dispatch<Action>;

  render(
    <StoreContextProvider>
      <TestComponent
        onDispatch={(d) => {
          dispatch = d;
        }}
      />
    </StoreContextProvider>
  );

  const start = performance.now();

  for (let i = 0; i < 10000; i++) {
    act(() => {
      dispatch({ type: 'INCREMENT', payload: { value: i } });
    });
  }

  const end = performance.now();

  console.info('\x1b[33m%s\x1b[0m', `Context API: ${(end - start) / 1000} seconds`);
});