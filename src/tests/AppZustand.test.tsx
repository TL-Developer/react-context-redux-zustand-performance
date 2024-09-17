import React, { act } from "react";
import { renderHook } from '@testing-library/react';
import useZustandStore from "../providers/Zustand";

global.React = React;

test('performance test Context API', () => {
  const { result }: { result: { current: any } } = renderHook(() => useZustandStore());

  const increment = result.current.increment;

  const start = performance.now();

  for (let i = 0; i < 10000; i++) {
    act(() => {
      increment();
    });
  }

  const end = performance.now();

  console.info('\x1b[33m%s\x1b[0m', `Zustand: ${(end - start) / 1000} seconds`);
});