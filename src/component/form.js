import styles from '../style.module.css'
import Todolist from './todolist'
const Form = ({todo, setTodo, todoList, setTodoList}) => {
    const handleChange = (event) => {
        setTodo(event.target.value)

    }   
    const handleSubmit =(event)=> {
       event.preventDefault();
       if(todo === "") {
        return alert('please input something')
       }
       setTodoList([...todoList, todo])
       setTodo("");
       //what I do here actually is appending the todo in the todolist //the problem here is that the array won't have unique Id
    }
    return(
        //<> is called react fragment, use for getting rid of unnecessary nodes 
        <>
        <div className={styles.todoForm}>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={todo}
                onChange={handleChange}
                className={styles.todoInput} 

                placeholder="Todo List App"
                />
                <input
                className={styles.todoButton}
                 type="submit"
                />
            </form>
            < Todolist 
            todoList={todoList}
            setTodoList={ setTodoList}
            />
        </div>
        </>
        
    )
}
export default Form;