import React, { useState } from 'react';
import './App.css';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={count % 2 === 0 ? 'even' : 'odd'}>
      <h1>React Homework 3</h1>
      <p>Count: {count}</p>

      <button onClick={handleClick}>Increase Count</button>

      <h2>Items:</h2>
      <ItemList items={items} />
    </div>
  );
};

export default App;