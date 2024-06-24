import { ADD_CASH, GET_CASH } from "./actions.types";

export const addCash = (amount: number) => ({
  type: ADD_CASH,
  payload: amount,
});

export const getCash = (amount: number) => ({
  type: GET_CASH,
  payload: amount,
});