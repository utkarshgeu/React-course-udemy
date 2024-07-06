import React, { useState } from "react";


function App() {

  const [arr,setArr] = useState([{
    id:1,
    title: "General",
    tasks: ["Take bath","Have lunch", "Walking"]
  },
  {
    id:2,
    title: "DSA",
    tasks: ["Complete Array medium questions","Start bit manipulation","Complete string excersize"]
  }
  ])

  return (
    <div className="App">
       { arr.map(item => <Content contentObj = {item} key = {item.id} />)}
    </div>
  );
}


function Content(props){
  return <div >
    <h1 >{props.contentObj.id} : {props.contentObj.title}</h1>
    {props.contentObj.tasks.map(task => <Tasks item = {task} /> )}
  </div>

}


function Tasks(props){
  return <ul>
    <li>{props.item}</li>
  </ul>
}


export default App;
