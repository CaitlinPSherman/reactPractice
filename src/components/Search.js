import React, { useState } from 'react';

const Search = ({ birds }) => {
  const [searchText, setSearchText] = useState('');

  let currentBirds = birds.filter((word) => word.includes(searchText));

  return (
    <div className="section">
      <form>
        <label>Bird Search: </label>
        <input
          type="search"
          placeholder="enter bird here"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value.toLowerCase())}
        ></input>
      </form>
      <h2>Birds found: {currentBirds.length}</h2>
      <ul>
        {currentBirds.length > 0 ? (
          currentBirds.sort().map((bird, index) => {
            return <li key={index}>{bird}</li>;
          })
        ) : (
          <li>no birds found!</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
