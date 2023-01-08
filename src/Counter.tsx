import { useState } from "react";
//////////////////////////////////////////////
// Part-A: 1-way binding
// type counterProps = {
//   value: number;
//   setValue: (prevState: number) => void;
// };
// const Counter = ({ value, setValue }: counterProps) => {
//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>+</button>
//       <button onClick={() => setValue(value - 1)}>-</button>
//     </>
//   );
// };
//////////////////////////////////////////////
// Part-B: 2 way binding
type counterProps = {
  value: number;
  incHandler: (arg0: number) => void;
  decHandler: (arg0: number) => void;
};
const Counter = ({ value, incHandler, decHandler }: counterProps) => {
  return (
    <>
      <button onClick={() => incHandler(value + 1)}>+</button>
      <button onClick={() => decHandler(value - 1)}>-</button>
    </>
  );
};
export default Counter;