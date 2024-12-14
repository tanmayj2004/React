import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([{ task: "Sample Task", id: uuid() ,done:false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((previousTodo) => {
      return [...previousTodo, { task: newTodo, id: uuid() }]
    });
    setNewTodo("");
  }

  let updateNewTask = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id != id));

  };
  let updateUpperCase = () => {
    setTodo((previousTodo) =>{

     previousTodo.map((todos) => {
      return {
        ...todos, task: todos.task.toUpperCase(),
      }
    })
  });
};
let upperCaseOne = (id) => {
  setTodo((previousTodo) => {
    return previousTodo.map((todos) => {
      if (todos.id === id) {
        return {
          ...todos,
          task: todos.task.toUpperCase(),
        };
      } else {
        return todos;
      }
    });
  });
};
let toggleDone=(id)=>{
  setTodo((previousTodo) => {
    return previousTodo.map((todos) => {
      if (todos.id === id) {
        return {
          ...todos,
          done :!todos.done,
        };
      } else {
        return todos;
      }
    });
  });
}



return (
  <div>
    <input
      placeholder="Add a task"
      value={newTodo}
      onChange={updateNewTask}
    />
    <button onClick={addNewTask}>Add</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <h4>TodoList</h4>
    <ul>
      {todo.map((task) => (
        <li key={task.id}
        style={{
          textDecoration: task.done ? "line-through" : "none", 
          color: task.done ? "gray" : "black",  
        }}>
          <spam>{task.task}</spam>
          &nbsp; &nbsp;
          <button onClick={() => deleteTodo(task.id)}>Delete</button>
          &nbsp; &nbsp;
          <button onClick={() => upperCaseOne(task.id)}>upperCaseOne</button>
          &nbsp; &nbsp;
          <button onClick={()=>toggleDone(task.id)}>{task.done ? "Undo" : "Mark as Done"}</button>
        </li>
      ))}
    </ul>
    <br />
    <button onClick={updateUpperCase}>UpdateALL</button>
  </div>
);
  }
