import React, { act, useEffect } from "react";
import {  render } from '@testing-library/react';
import { Provider, useDispatch } from "react-redux";
import store, { increment } from "../providers/Redux";

global.React = React;

const TestComponent = ({ onDispatch }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    onDispatch(dispatch);
  }, [dispatch, onDispatch]);

  return null;
};

test('performance test Redux Toolkit', () => {
  let dispatch;

  render(
    <Provider store={store}>
      <TestComponent
        onDispatch={(d) => {
          dispatch = d;
        }}
      />
    </Provider>
  );

  const start = performance.now();

  for (let i = 0; i < 10000; i++) {
    act(() => {
      dispatch(increment());
    });
  }

  const end = performance.now();

  console.log('\x1b[33m%s\x1b[0m', `Redux Toolkit: ${(end - start) / 1000} seconds`);
});