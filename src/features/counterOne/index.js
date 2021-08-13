import React from "react";
import { useDispatch } from 'react-redux';
import { onDecrement, onIncrement } from './counterAction';

const Counter = () => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <button type="button" onClick={() => onDecrement(dispatch)}>
                -
            </button>
            <button type="button" onClick={() => onIncrement(dispatch)}>
                +
            </button>
        </div>
    );
};

export default Counter;
