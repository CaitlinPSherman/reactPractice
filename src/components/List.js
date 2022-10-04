import React, { useState } from 'react';

const List = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

    const handleClick = (i) => {
        const l = [...list];
        setList(l.filter((e, index) => index !== i))
    }

  return (
    <div className="section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList([...list, newItem]);
          setNewItem('');
        }}
      >
        <input
          type="text"
          placeholder="add list item here"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      <h2>List:</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleClick(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
