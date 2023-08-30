"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/features/counterSlice";

const HomePage = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);

  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Total:{count}</h1>

      <button onClick={handleIncrement}>increment</button>
      <br />
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default HomePage;
