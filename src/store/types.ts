import {Dispatch} from "react";

export enum ActionTypes {
    SET_COIN ,
    SET_CURRENCY ,
}

export interface StateType {
    coinID: string,
    currency: string,
}

export type ActionType = {
    type: ActionTypes,
    payload: any,
}

export type UseActionType = {}

export type ContextType = [
    state: StateType,
    actions: UseActionType,
    dispatch: Dispatch<ActionType>,
]
