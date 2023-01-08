import { useState } from "react";
//////////////////////////////////////////////
// Part-A: 1-way binding
type counterProps = {
  value: number;
  setValue: (prevState: number) => void;
};
const Counter = ({ value, setValue }: counterProps) => {
  return (
    <>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </>
  );
};
export default Counter;