import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./counterActionConstants";

const intialState = {
    count: 0,
};

const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            return {
                ...state,
                count: state.count + 1,
            };
        }
        case COUNTER_DECREMENT: {
            return {
                ...state,
                count: state.count - 1,
            };
        }
        default:
            return state;
    }
};

export default counterReducer;
