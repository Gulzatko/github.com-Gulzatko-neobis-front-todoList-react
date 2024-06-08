import React, {useState} from "react";
import "./TodoForm.css";


export const TodoForm =({addTodo}) => {

  const [value, setValue] = useState("");

   const handleSubmit = e=>{
    e.preventDefault();

    addTodo(value);
     
      setValue("");
   }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="Type a task"  onChange={(e)=>setValue(e.target.value)}/>
       <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};
