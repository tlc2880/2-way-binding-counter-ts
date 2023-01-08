import React, {useState} from 'react';
import Counter from "./Counter";
import './App.css';

function App() {
  //////////////////////////////////////////////
  // Part-A: 1-way binding counter
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h4 style={{ color: "red" }}>Counter: {value}</h4>
      <Counter value={value} setValue={setValue} />
    </div>
  );
  }
export default App;
