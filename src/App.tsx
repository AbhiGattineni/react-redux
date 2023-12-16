import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmout,
} from "./state/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;
