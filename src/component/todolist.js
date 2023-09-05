import Todo from './todo'
const Todolist = ({todoList, setTodoList}) => {
    return (
    <div>
          {
          todoList.map((todoItem, index)=> (<Todo 
            key={index}
             todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
              ></Todo>))
        }
    </div>
    );
    
}
export default Todolist;