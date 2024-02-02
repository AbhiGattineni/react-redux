import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppDispatch, RootState } from "./state/store";
import {
  decrement,
  decrementAsync,
  decrementByValue,
  increment,
  incrementAsync,
  incrementByValue,
} from "./state/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByValue(10))}>
          increment by 10
        </button>
        <button onClick={() => dispatch(decrementByValue(10))}>
          decrement by 10
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          increment Async by 10
        </button>
        <button onClick={() => dispatch(decrementAsync(10))}>
          decrement Async by 10
        </button>
      </div>
    </div>
  );
}

export default App;
