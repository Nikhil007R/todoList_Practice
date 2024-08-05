import { useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import { TodoItemContext } from "./store/todo-items-store";

function App() {
  // const [count, setCount] = useState(0)

  // let foodItems = ["nikhil", "om", "Nitin", "Nirbhay", "Manan", "Nazim", "Piyush", "Rajit"];
  // let foodItems = [];

  let [todoItems, setTodoItems] = useState([]);

  const addNewItem = (item, date) => {
    console.log(`New item: ${item} and duedate is: ${date}`);
    // console.log(e);

    // using spread operetor
    // let newItem = [...todoItems, {name: item, duedate: date}]
    // console.log(newItem)
    // setTodoItems(newItem);

    // uisng functional updates (jab previous value se lekr hum chnges kre kya pta state mai previous value abhi jo new value se update honi ho vo nhi hui ho)

    setTodoItems((currentVal) => {
      const newItem = [...currentVal, { name: item, duedate: date }];
      console.log(newItem);
      return newItem;
    });
  };

  const deleteItem = (todoNameItem) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoNameItem);
    setTodoItems(newTodoItems);
    console.log(todoNameItem + " clicked");
  };

  return (
    <TodoItemContext.Provider value={{todoItems: todoItems, addNewItem: addNewItem, deleteItem: deleteItem}}>
      <center className="todo-container">
        <Header />
        <div className="container">
          <AddTodo/>
          {/* <ErrorMessage todoItems={todoItems} /> while using usestate  */}
          <ErrorMessage />
          {/* <TodoItems todoItems={todoItems} onDelete={handleDeleteOnClick} /> while using usestate  */}
          <TodoItems />

          {/* ----------- this is how we use map for react ----------- */}

          {/* <ul className='list-group'> 
            {foodItems.map((item)=>(<li key={item} className='list-group-item'>{item}</li>))}
            </ul> */}

          {/* --------------- conditional rendering --------------- ternary operator  */}

          {/* {foodItems.length == 0 ? <p className='conditional'>We don't have any value right now! </p> : null}  */}

          {/* --------------- we can also use this --------------- logical operator   */}
          {/* {foodItems.length == 0 && <p className='conditional'>We don't have any value right now! </p>} */}
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
