"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/features/counterSlice";

import {
  useGetUserByIdQuery,
  useGetUsersQuery,
} from "./redux/services/userApi";

const HomePage = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);

  const dispatch = useAppDispatch();

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <p>Loading...</p>;

  if (error) return <p>There is an error fetching the data.</p>;

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

      {data?.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
