import React, {useState} from "react";

function App() {

   const [todos,setTodos] = useState([{ 
    id : 1,
    title : "Item 1",
    description : "This is item 1"
    },
    {
    id : 2,
    title : "Item 2",
    description : "This is item 2"
    },
    {
    id : 3,
    title : "Item 3",
    description : "This is item 3"
    }
])


function addTodo(){
  setTodos([...todos,{
    id: 4,
    title: Math.random(),
    description: Math.random()
  }])
}

    return <div>
      <button onClick={addTodo}>Add new item</button>
      {todos.map( todo =>  <Todo title = {todo.title} description={todo.description} key = {todo.id} />  )}
    </div>

}


function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}
export default App;
