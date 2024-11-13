import React from 'react'

export default function AddItem() {

    function addItem({target}) {
        console.log(target.value);
        
    }

  return (
    <form className='addForm'>
        {/* <label htmlFor='addItem'>Add Item</label> */}
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
        />
        <button
            className='addItemButton'
            type='submit'
            aria-label='Add Item'
            onClick={addItem}
        >+</button>
    </form>
  )
}
