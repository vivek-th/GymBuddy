import React from "react";

function TodoItems({ todoName, todoDate, onDeleteClick }) {
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-auto">
          <div className="col">{todoName}</div>
          <div className="col">{todoDate}</div>
          <div className="col">
            <button onClick={() => onDeleteClick(todoName)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
