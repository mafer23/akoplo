import React from "react";
import { Header } from "./components/Header";
// import logo from './logo.svg';
// import './App.css';
import { TodoCounter } from "./components/TodoCounter";

const todo = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar Curso', completed: false},
  {text: 'Llorar cebolla', completed: false}
];

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      <Header />
      {/* <TodoCounter />
      <h2>Has completado 2 de 3 todos</h2>

      <TodoSearch />
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button></button> */}
    </React.Fragment>
    
    
  );
}

export default App;
