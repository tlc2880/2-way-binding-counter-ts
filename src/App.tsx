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
    const [value, setValue] = useState(0);
    const incHandler = (value: number) => {
      setValue(value);
    };
    return (
      <div className="App">
        <h4 style={{ color: "red" }}>Counter: {value}</h4>
        <Counter value={value} incHandler={incHandler} />
      </div>
    );
  }
export default App;
