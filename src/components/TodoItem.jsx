import React from "react";
import { MdDelete } from "react-icons/md";

function TodoItem({ todoname, tododate, onDelete }) {
  return (
    <>
      <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>{onDelete(todoname)}}>
            <MdDelete/>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
