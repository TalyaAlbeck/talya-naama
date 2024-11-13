import React, { useState } from 'react'
import apiRequests, {updateList} from '../../server';

export default function AddItem({list, setList}) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!newItem) return;
        console.log(newItem); 
        addItem(newItem);
        setNewItem('');
    }

    function addItem(item) {
        const id = list.length ? list[list.length - 1].id + 1 : 1;
        const myNewItem = {id, item, checked: false};
        const listItems = [...list, myNewItem];
        setList(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
        updateList(1, listItems)
    }

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        {/* <label htmlFor='addItem'>Add Item</label> */}
        <input 
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            value={newItem}
            onChange={({target}) => setNewItem(target.value)}
            required
        />
        <button
            className='addItemButton'
            type='submit'
        >+</button>
    </form>
  )
}
