import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
  //////////////////////////////////////////////
  // Part-A: 1-way binding counter
  // const [value, setValue] = useState(0);
  // return (
  //   <div className="App">
  //     <h4 style={{ color: "red" }}>Counter: {value}</h4>
  //     <Counter value={value} setValue={setValue} />
  //   </div>
  // );
  /////////////////////////////////////////////////
  // Part-B: 2-way binding
//   const [value, setValue] = useState(0);
//   const incHandler = (value: number) => {
//     setValue(value);
//   };
//   return (
//     <div className="App">
//       <h4 style={{ color: "red" }}>Counter: {value}</h4>
//       <div className="App"></div>
//       <Counter value={value} incHandler={incHandler} decHandler={incHandler} />
//     </div>
//   );
// }
////////////////////////////////////////////////////////
// Part-C: 2-way binding using less passing of arguments
//   const [value, setValue] = useState(0);
//   const incHandler = (value: number) => {
//     setValue(value);
//   };
//   return (
//     <div className="App">
//       <h4 style={{ color: "red" }}>Counter: {value}</h4>
//       <Counter value={value} incHandler={incHandler} />
//     </div>
//   );
// }
////////////////////////////////////////////////////////////
// Part-D: 2-way binding using less passing of arguments
//   const [value, setValue] = useState(0);
//   const incHandler = (value: number) => {
//     setValue(value);
//   };
//   return (
//     <div className="App">
//       <h4 style={{ color: "red" }}>Counter: {value}</h4>
//       <Counter value={value} incHandler={incHandler} />
//     </div>
//   );
// }

  //////////////////////////////////////////////////////////////////
  // Part-E: 2-way binding of output data and multiply input counter
  //   const [value, setValue] = useState(0);
  //   const [multVal, setMultVal] = useState(1);
  //   const incHandler = (value: number) => {
  //     setValue(value);
  //   };
  //   return (
  //     <div className="App">
  //       <h4 style={{ color: "red" }}>Counter: {value}</h4>
  //       <Counter value={value} incHandler={incHandler} multVal={multVal} />
  //       <input
  //         type="number"
  //         value={multVal}
  //         onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
  //       />
  //     </div>
  //   );
  // }
  /////////////////////////////////////////////////////
  // Part-E.2: 2-way binding of number array
  const [value, setValue] = useState(0);
  const [multVal, setMultVal] = useState(1);
  const [arr, setArr] = useState<number[]>([1, 2]);
  const incHandler = (value: number) => {
    setValue(value);
  };
  return (
    <div className="App">
      <h4 style={{ color: "red" }}>Counter: {value}</h4>
      <h4 style={{ color: "blue" }}>Array: {JSON.stringify(arr)}</h4>
      <Counter
        value={value}
        incHandler={incHandler}
        multVal={multVal}
        arr={arr}
        setArr={setArr}
      />
      <input
        type="number"
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setValue(value * 2)}>Mult Counter by 2</button>
    </div>
  );
}
  ////////////////////////////////////////////////////////////////////
  //Part-F: 2-way binding with push array, push string, and mult array
//   const [value, setValue] = useState(0);
//   const [multVal, setMultVal] = useState(1);
//   const [arr, setArr] = useState<number[]>([1, 2]);
//   const [strArr, setStrArr] = useState(["One", "Two"]);
//   const incHandler = (value: number) => {
//     setValue(value);
//   };
//   const multArr = () => {
//     let numArrTemp = [...arr];
//     numArrTemp.forEach((item, index, arr) => {
//       arr[index] = item * multVal;
//     });
//     setArr(numArrTemp);
//   };
//   return (
//     <div className="App">
//       <h4 style={{ color: "red" }}>Counter: {value}</h4>
//       <h4 style={{ color: "blue" }}>Number Array: {JSON.stringify(arr)}</h4>
//       <h4 style={{ color: "green" }}>String Array: {JSON.stringify(strArr)}</h4>
//       <Counter
//         value={value}
//         incHandler={incHandler}
//         multVal={multVal}
//         arr={arr}
//         setArr={setArr}
//         strArr={strArr}
//         setStrArr={setStrArr}
//       />
//       <input
//         type="number"
//         value={multVal}
//         onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
//       />
//       <button onClick={() => multArr()}>Mult array</button>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////
// Part-G: 2-way object binding with push array, push string, and mult array
//   const [value, setValue] = useState(0);
//   const [multVal, setMultVal] = useState(1);
//   const [arr, setArr] = useState<number[]>([1, 2]);
//   const [strArr, setStrArr] = useState(["One", "Two"]);
//   const [obj, setObj] = useState({
//     objNum: 0,
//     objNumArr: [11, 22],
//     objStrArr: ["Five", "Six"]
//   });
//   const incHandler = (value: number) => {
//     setValue(value);
//   };
//   const multArr = () => {
//     let numArrTemp = [...arr];
//     numArrTemp.forEach((item, index, arr) => {
//       arr[index] = item * multVal;
//     });
//     setArr(numArrTemp);

//     numArrTemp = [...obj.objNumArr];
//     numArrTemp.forEach((item, index, arr) => {
//       arr[index] = item * multVal;
//     });
//     obj.objNumArr = numArrTemp;
//   };
//   return (
//     <div className="App">
//       <h4 style={{ color: "red" }}>Counter: {value}</h4>
//       <h4 style={{ color: "blue" }}>Number Array: {JSON.stringify(arr)}</h4>
//       <h4 style={{ color: "green" }}>String Array: {JSON.stringify(strArr)}</h4>
//       <h4 style={{ color: "purple" }}>String Array: {JSON.stringify(obj)}</h4>
//       <Counter
//         value={value}
//         incHandler={incHandler}
//         arr={arr}
//         setArr={setArr}
//         strArr={strArr}
//         setStrArr={setStrArr}
//         obj={obj}
//         setObj={setObj}
//       />
//       <input
//         type="number"
//         value={multVal}
//         onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
//       />
//       <button onClick={() => multArr()}>Mult array</button>
//     </div>
//   );
// }
export default App;