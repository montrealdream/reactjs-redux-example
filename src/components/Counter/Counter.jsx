import { BoxTitle } from "../BoxTitle/BoxTitle";
import { counterUp, counterDown, counterReset } from "../../actions/counter";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
    const dispatch = useDispatch(); // khởi tạo dispatch

    const count = useSelector(state => state.counterReducer.count);

    // dispatch action
    const handleUp = () => {
        dispatch(counterUp());
    }

    const handleDown = () => {
        dispatch(counterDown());
    }

    const handleReset = () => {
        dispatch(counterReset());
    }
    // hết dispatch action

    return (
        <>
            <BoxTitle title={"Counter Sử Dụng Redux"}/>
            <h1>COUNTER: {count}</h1>
            <button onClick={handleUp}>UP</button>
            <button onClick={handleDown}>DOWN</button>
            <button onClick={handleReset}>RESET</button>
        </>
    );
}