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
    <>
      <h1 className="text-center text-2xl">Total:{count}</h1>

      <div className="flex justify-center gap-x-2">
        <button
          className="bg-green-500 px-3 py-2 rounded-md"
          onClick={handleIncrement}
        >
          increment
        </button>
        <br />
        <button
          className="bg-blue-500 px-3 py-2 rounded-md"
          onClick={handleDecrement}
        >
          decrement
        </button>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-3">
        {data?.map((user) => (
          <div className="bg-zinc-800 p-4" key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
