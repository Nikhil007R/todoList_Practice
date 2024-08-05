import { useContext } from 'react';
import styles from './ErrorMessage.module.css'
import { TodoItemContext } from '../store/todo-items-store';

// function ErrorMessage({todoItems}){ while having props as todoItems from the app(Parent)
function ErrorMessage(){

    const contextObj = useContext(TodoItemContext);
    const todoItems = contextObj.todoItems;

    return(

        todoItems.length === 0 && <p className={styles.font}>Enjoy your day!!</p>
    )
}

export default ErrorMessage;