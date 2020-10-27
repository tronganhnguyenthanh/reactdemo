import React from "react";
import TodoItem from "../component/TodoItem";
import todosData from "../component/TodoData";
import Form from "../component/Form";
import MemeGenerator from "../component/Memegenerator";
import "../css/style.css";
// import Tang from '../component/CountDown';
import Header from '../component/Header';
function App() {
  const todo = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div>
      <div className="todo-list">{todo}</div>
       <Form />
       <Header/>
       <MemeGenerator />
      {/* Tang */}
    </div>
  );
}
export default App;
