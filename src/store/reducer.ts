import {ActionType, ContextType, StateType} from './types';

export const initialState: StateType = {
  coinID: "bitcoin",
  currency: "usd",
};

export const initialContext: ContextType = [
  initialState,
  {},
  () => {
    throw new Error('dispatch function must be overridden');
  },
];

export default function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    default:
      return state;
  }
}
