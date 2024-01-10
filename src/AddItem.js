import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa"

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();

  return (
    <form className='addItemForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add New Item:</label>
      <input
        id='addItem' 
        type="text" 
        placeholder='Add New Item'
        autoFocus
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        onClick={() => inputRef.current.focus()}
        aria-label='Add Item'
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem