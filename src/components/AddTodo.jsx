// import styles from './AddTodo.module.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { useState, useRef, useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameReference = useRef();
  const todoDateReference = useRef();

  const contextObj = useContext(TodoItemContext);
  const onNewButton = contextObj.addNewItem;

  // let [todoName, setTodoName] = useState("");
  // let [todoDate, setTodoDate] = useState("");

  // const handleNameChange = (event)=>{
  //     setTodoName(event.target.value)
  // }
  // const handleDateChange = (event)=>{
  //     setTodoDate(event.target.value)
  // }
  const handleAddClickButton = (e) => {
    e.preventDefault();
    const todoName = todoNameReference.current.value
    const todoDate = todoDateReference.current.value

    todoNameReference.current.value = "";
    todoDateReference.current.value = "";
    onNewButton(todoName, todoDate);
    // setTodoName("")
    // setTodoDate("")
  };

  return (
    <>
      <form className="row AddToDoInput" onSubmit={handleAddClickButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameReference}
            // value={todoName}
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
            ref={todoDateReference}
            // value={todoDate} 
            // onChange={handleDateChange} 
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success"
            //</div>onClick={handleAddClickButton}
          >
            <IoAddCircleOutline />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
