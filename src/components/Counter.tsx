import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  incrementAsync,
} from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment By 10
      </button>
      <button onClick={() => dispatch(incrementAsync(10))}>
        Async Increment By 10
      </button>
    </div>
  );
}

export default Counter;
