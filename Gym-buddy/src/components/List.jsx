import React from 'react'
import TodoItems from './TodoItems'

function List({items , onDeleteClick}) {
  return (
    <div>
          {
            items.map((items)=>
          <TodoItems todoDate={items.dueDate} todoName={items.name} onDeleteClick={onDeleteClick}></TodoItems>
          )
        }
    </div>
  )
}

export default List
