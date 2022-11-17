import React,{useState} from "react";
import "./style.css";

export default function App() {

  const [todos,setTodos] = useState([]);
  
  const [todoName,setTodoName] = useState("");

  const handleClick = () => {
      const prevTodo = [...todos];
      prevTodo.push(todo);
      setTodos(prevTodo);
  }

  return (
    <div>
      <input value={todoName} onChange={event=>setTodoName(event.target.value)} />
      <button onClick={handleClick}>Add</button>
      {todos.map(item=><p>{item}</p>)}
    </div>
  );
}