import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item, handleClick, handleDelete }) => {
  return (
    <li className='item'>
      <input 
        type="checkbox" 
        checked={item.checked}
        onClick={() => handleClick(item.id)}
      />
      <label
        style={item.checked ? {textDecoration: "line-through"} : null} 
        onDoubleClick={() => handleClick(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role='button'
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete: ${item.item}`}
      />
    </li>
  )
}

export default Item