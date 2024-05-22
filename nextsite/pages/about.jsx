import { useState } from "react";

const App=()=>{
  const [count,setCount]=useState(0);


  const increment =()=>{
    setCount(count+1);
  };
  return (
    <div>
      <h1>Incrementor</h1>
      <button onClick={increment}>`Clicked {count} times `</button>
    </div>
  );
};


export default App;