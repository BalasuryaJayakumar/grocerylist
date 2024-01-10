import React from 'react'
import Item from './Item'

const List = ({ items, handleClick, handleDelete }) => {
  return (
    <ul>
      { items.map(item => (
        <Item 
          item={item}
          key={item.id}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default List