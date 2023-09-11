import React, {useState} from 'react';
import './App.css';

function App() {

// State hook 
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);


// Helper function

function addItem() {
  if (!newItem) {
    alert ("enter an item.");
    return;
  }

  const item = {
    id: Math.floor(Math.random() *1000),
    value:newItem
  };

  setItems(oldList => [...oldList, item]);

  setNewItem("");
}

function deletItem(id) {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

  return (
    <div className="App">
      {/* 1 header */}
     <h1>Todo List App</h1>

     {/* 2 Input (input and button */}
    <input 
      type='text'
      placeholder='Add an item...'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    />
    <button onClick={() => addItem()}>Add</button>
     {/* 3 List of Items */}

    <ul>

    {items.map(item =>{
      return(
        <li key={item.key}>{item.value} <button className='delete-button' onClick={() => deletItem(item.id)}>❌</button></li>
      )
    })}

    </ul>

    </div> 
  );
}

export default App;
