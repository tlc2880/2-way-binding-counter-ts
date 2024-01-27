import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
////////////////////////////////////////////////////////////////////////////
// Part-G: 2-way object binding with push array, push string, and mult array
  const [value, setValue] = useState(0);
  const [multVal, setMultVal] = useState(1);
  const [arr, setArr] = useState<number[]>([1, 2]);
  const [strArr, setStrArr] = useState(["One", "Two"]);
  const [obj, setObj] = useState({
    objNum: 0,
    objNumArr: [11, 22],
    objStrArr: ["Five", "Six"]
  });
  const incHandler = (value: number) => {
    setValue(value);
  };
  const multArr = () => {
    let numArrTemp = [...arr];
    numArrTemp.forEach((item, index, arr) => {
      arr[index] = item * multVal;
    });
    setArr(numArrTemp);

    numArrTemp = [...obj.objNumArr];
    numArrTemp.forEach((item, index, arr) => {
      arr[index] = item * multVal;
    });
    obj.objNumArr = numArrTemp;
  };
  return (
    <div className="App">
      <h4 style={{ color: "red" }}>Counter: {value}</h4>
      <h4 style={{ color: "blue" }}>Number Array: {JSON.stringify(arr)}</h4>
      <h4 style={{ color: "green" }}>String Array: {JSON.stringify(strArr)}</h4>
      <h4 style={{ color: "purple" }}>String Array: {JSON.stringify(obj)}</h4>
      <Counter
        value={value}
        incHandler={incHandler}
        arr={arr}
        setArr={setArr}
        strArr={strArr}
        setStrArr={setStrArr}
        obj={obj}
        setObj={setObj}
      />
      <input
        type="number"
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={() => multArr()}>Mult array</button>
    </div>
  );
}
export default App;