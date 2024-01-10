import React from 'react'
import List from './List'

const Content = ({ items, handleClick, handleDelete, fetchError, isLoading }) => {
  return (
    <main className='content'>
      { isLoading && <p className='statusMsg'>Loading List...</p> }
      { !isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p> }
      { !isLoading && !fetchError && 
        <>
          {items.length ? (
            <List 
              items={items}
              handleClick={handleClick}
              handleDelete={handleDelete}
            />
          ) : (
            <p style={{marginTop: "2rem"}}>Your List is Empty.</p>
          )}
        </>
      }
    </main>
  )
}

export default Content