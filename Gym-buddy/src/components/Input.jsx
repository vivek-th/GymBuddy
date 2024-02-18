import React, { useState } from 'react'

function Input({ newEx }) {
    
    const [newtodo, setnewtodo] = useState();
    const [newdate, setnewdate] = useState();

    const handleTodoChange = (event) => {
        setnewtodo(event.target.value);
    }

    const handleDateChange = (event) => {
        setnewdate(event.target.value);
    }

    const handleAddButton = () => {
        newEx(newtodo, newdate);
        setnewtodo("");
        setnewdate("");
    }
    
    
  return (
      <>
          
          <input className='Excercise' placeholder='Enter your exercise ' type='text' onChange={handleTodoChange} value={newtodo}></input>
          <input type='date' onChange={handleDateChange} value={newdate}></input>
          <button className="btn btn-primary" onClick={handleAddButton} >Add</button>

      </>
  )
}

export default Input
