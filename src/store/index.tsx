import React, { useContext, useReducer } from 'react';

import reducer, {initialContext, initialState} from './reducer';
import useActions from './actions';
import {ContextType} from "./types";

const Store = React.createContext<ContextType>(initialContext);

export function StoreProvider({children}: any): JSX.Element {

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  const value: ContextType = [ state, actions, dispatch ];

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export const useStore = () => useContext(Store);
