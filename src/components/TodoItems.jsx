import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";

// function TodoItems({todoItems, onDelete}){
function TodoItems(){

    // console.log(todoItems);

    const contextObj = useContext(TodoItemContext);
    const todoItems = contextObj.todoItems;
    const onDelete = contextObj.deleteItem;

    return (
        <>
            {/* <TodoItem todoname="Buy Milk" tododate="4/10/2024"/> 
            <TodoItem todoname="Go to College" tododate="4/10/2024"/>  */}
            {todoItems.map((items)=>(<TodoItem key={items.name} todoname={items.name} tododate={items.duedate} onDelete={onDelete}/>))}
        </>
    )
}

export default TodoItems;