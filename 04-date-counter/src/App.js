import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter(){
   
    const [step,setStep] = useState(0);
    const [days,setDays] = useState(0);
    let date = new Date();
    date.setDate(date.getDate()+days)
    return <div>
      <button onClick={()=>{setStep(step-1)}}>-</button> Step : {step} <button onClick={()=>{setStep(step+1)}}>+</button>
      <button onClick={()=>{setDays(days-step)}}>-</button> Days : {days} <button onClick={()=>{setDays(days+step)}}>+</button>
     
      <h1>{days} Days later date will be {date.toDateString()} </h1>
    </div>
}


export default App;
