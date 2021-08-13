import React from "react";
import { useSelector } from "react-redux";
import Counter from "./features/counterOne";

const PARA = "My Current Count Value is";

const App2 = () => {
    const count = useSelector((state) => {
        return state.counterReducer.count;
    });
    return (
        <div>
            level 2
            <div>
                <p>{`${PARA} ${count}`}</p>
            </div>
        </div>
    );
};

const App1 = () => {
    const count = useSelector((state) => {
        return state.counterReducer.count;
    });
    return (
        <div>
            level 1
            <div>
                <p>{`${PARA} ${count}`}</p>
            </div>
        </div>
    );
};

const AppMain = () => {
    return (
        <div>
            level 0
            <Counter />
            <App1 />
            <App2 />
        </div>
    );
};

export default AppMain;

export const sampleFn = () => {
    console.log("sample fn");
};
