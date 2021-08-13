import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./counterActionConstants";

export const onDecrement = (dispatch) => {
    dispatch({ type: COUNTER_DECREMENT });
};

export const onIncrement = (dispatch) => {
    dispatch({ type: COUNTER_INCREMENT });
};
