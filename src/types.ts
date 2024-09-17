import { Dispatch } from "react";

export type Action =
| { type: 'INCREMENT', payload: TCount };

export type TCount = {
  value: number;
};

export type State = {
  count: TCount;
  dispatch: Dispatch<Action>;
};