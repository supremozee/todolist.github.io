import Form from "./component/form";
import Header from "./component/header";
import {useState} from 'react'
function App() {
  const [todo, setTodo] =useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header/>
      <Form
      todo={todo}
      setTodo={setTodo}
      todoList={todoList}
      setTodoList={ setTodoList}
      />
      </div>
  );
}
export default App;
