import React, { useEffect, useState } from "react";
import "../style/TodoWrapper.css";
import { Category } from "./Category";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();
export const TodoWrapper = () => {
   const [todos, setTodos] = useState([]);
   const [category, setCategory] = useState("personal");
   const addTodo = (todo) => {
      setTodos([
         ...todos,
         {
            id: uuidv4(),
            task: todo,
            completed: false,
         },
      ]);
      const lcTodos = JSON.parse(localStorage.getItem("todos"));
      if (lcTodos) {
         lcTodos.push({
            id: uuidv4(),
            task: todo,
            completed: false,
            category,
         });
         localStorage.setItem("todos", JSON.stringify(lcTodos));
      } else {
         const arr = [];
         arr.push({
            id: uuidv4(),
            task: todo,
            completed: false,
            category,
         });
         localStorage.setItem("todos", JSON.stringify(arr));
      }
   };
   useEffect(() => {
      const lcTodos = JSON.parse(localStorage.getItem("todos"));
      lcTodos ? setTodos(lcTodos) : setTodos([]);
   }, []);
   
   const toggleComplete = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed, category } : todo
         )
      );
   };
   const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };
   const editTodo = (id) => {
      setTodos(
         todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
      );
   };
   const editTask = (task, id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
         )
      );
   };
   return (
      <div className="todoWrapper">
         <TodoForm addTodo={addTodo} />
         <Category setCategory={setCategory} />
         {todos.map((todo) =>
            todo.isEditing ? (
               <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
               <Todo
                  key={todo.id}
                  task={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  category={category}
               />
            )
         )}
      </div>
   );
};