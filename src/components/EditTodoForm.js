import React, {useState} from "react";
import "../style/TodoForm.css";


export const EditTodoForm =({editTodo, task}) => {

  const [value, setValue] = useState(task.task);

   const handleSubmit = e=>{
    e.preventDefault();

     editTodo(value, task.id);
     
      setValue("");
   }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
       <input type="checkbox"/>
      <input type="text" className="todo-input" 
       value={value} placeholder="update Task"  
       onChange={(e)=>setValue(e.target.value)}/>
       <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};
