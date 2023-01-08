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
// type counterProps = {
//   value: number;
//   incHandler: (arg0: number) => void;
//   decHandler: (arg0: number) => void;
// };
// const Counter = ({ value, incHandler, decHandler }: counterProps) => {
//   return (
//     <>
//       <button onClick={() => incHandler(value + 1)}>+</button>
//       <button onClick={() => decHandler(value - 1)}>-</button>
//     </>
//   );
// };
////////////////////////////////////////////////////////
// Part-C: 2-way binding using less passing of arguments
// type counterProps = {
//   value: number;
//   incHandler: (arg0: number) => void;
// };
// const Counter = ({ value, incHandler }: counterProps) => {
//   const handleCounter = (isIncrement: boolean) => {
//     if (isIncrement) {
//       incHandler(value + 1);
//     } else {
//       incHandler(value - 1);
//     }
//   };
//   return (
//     <>
//       <button onClick={() => handleCounter(true)}>+</button>
//       <button onClick={() => handleCounter(false)}>-</button>
//     </>
//   );
// };
////////////////////////////////////////////////////////////
// Part-D: 2-way binding of output data and 1-way input data
// type counterProps = {
//   value: number;
//   incHandler: (arg0: number) => void;
// };
// const Counter = ({ value, incHandler }: counterProps) => {
//   const [addVal, setAddVal] = useState(1);
//   const handleCounter = (isIncrement: boolean) => {
//     if (isIncrement) {
//       incHandler(value + 1);
//     } else {
//       incHandler(value - 1);
//     }
//   };
//   const AddInput = () => incHandler(addVal + value);
//   return (
//     <>
//       <button onClick={() => handleCounter(true)}>+</button>
//       <button onClick={() => handleCounter(false)}>-</button>
//       <button onClick={() => incHandler((value = 0))}>Reset</button>
//       <input
//         type="number"
//         value={addVal}
//         onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
//       />
//       <button onClick={AddInput}>Add Input</button>
//     </>
//   );
// };
///////////////////////////////////////////////////////
// Part-E: 2-way binding of output data and input data
// type counterProps = {
//   value: number;
//   incHandler: (arg0: number) => void;
//   multVal: number;
// };
// const Counter = ({ value, incHandler, multVal }: counterProps) => {
//   const [addVal, setAddVal] = useState(1);
//   const handleCounter = (isIncrement: boolean) => {
//     if (isIncrement) {
//       incHandler(value + 1);
//     } else {
//       incHandler(value - 1);
//     }
//   };
//   const AddInput = () => incHandler(addVal + value);
//   const MultInput = () => incHandler(multVal * value);
//   return (
//     <>
//       <button onClick={() => handleCounter(true)}>+</button>
//       <button onClick={() => handleCounter(false)}>-</button>
//       <button onClick={() => incHandler((value = 0))}>Reset</button>
//       <input
//         type="number"
//         value={addVal}
//         onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
//       />
//       <button onClick={AddInput}>Add Input</button>
//       <button onClick={MultInput}>Mult Input</button>
//     </>
//   );
// };
//////////////////////////////////////////////////////////////////////
// Part-F: 2-way binding with push array, push string, and mult array
type counterProps = {
    value: number;
    incHandler: (arg0: number) => void;
    multVal: number;
    arr: number[];
    setArr: (arg0: number[]) => void; // this will also work: ()=>void
    strArr: string[];
    setStrArr: (arg0: string[]) => void; // this will also work: ()=>void
  };
  
  const Counter = ({
    value,
    incHandler,
    multVal,
    arr,
    setArr,
    strArr,
    setStrArr
  }: counterProps) => {
    const [addVal, setAddVal] = useState(1);
    const [inStr, setInStr] = useState("");
  
    const handleCounter = (isIncrement: boolean) => {
      if (isIncrement) {
        incHandler(value + addVal);
      } else {
        incHandler(value - addVal);
      }
    };
    return (
      <>
        <button onClick={() => handleCounter(true)}>+</button>
        <button onClick={() => handleCounter(false)}>-</button>
        <button onClick={() => incHandler((value = 0))}>Reset</button>
        <input
          type="number"
          value={addVal}
          onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
        />
        <button
          onClick={() => {
            setArr([...arr, arr.length + 1]);
            console.log(arr);
          }}
        >
          Push array
        </button>
        <input
          type="string"
          value={inStr}
          onChange={(e) => setInStr(e.target.value)}
        />
        <button
          onClick={() => {
            setStrArr([...strArr, inStr]);
            setInStr("");
          }}
        >
          Push Str
        </button>
      </>
    );
  };
export default Counter;