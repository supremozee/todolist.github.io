import styles from '../style.module.css'
const Todo = ({todoItem, todoList, setTodoList})=> {
    const deleteTodo = ()=> {
        setTodoList(todoList.filter((dellist)=> dellist !== todoItem))
    }
    return(
        <div>
            <div className={styles.todoItem}>
         <h2 className={styles.todoName}>{todoItem}</h2>
         <button className={styles.deleteItem} onClick={deleteTodo}>Remove</button>
            </div>
        </div>
    )
}
export default Todo;
