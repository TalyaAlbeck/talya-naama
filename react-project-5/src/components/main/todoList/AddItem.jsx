import React, { useState } from 'react'
import apiRequests from '../../server';

export default function AddItem({list, setList}) {

    const [newItem, setNewItem] = useState('');
    const [fetchError, setFetchError] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        if (!newItem) return;
        console.log(newItem); 
        addItem(newItem);
        setNewItem('');
    }

    async function addItem(item) {
        const id = list.length ? list[list.length - 1].id + 1 : 1;
        const myNewItem = {id, item, checked: false};
        const listItems = [...list, myNewItem];
        setList(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

        const updateOption = {
            method: 'PATCH',
            body: JSON.stringify({todo: [listItems]})
        }
        const result = await apiRequests('http://localhost:3000/users/13', updateOption);
        if (result) setFetchError(result);
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
