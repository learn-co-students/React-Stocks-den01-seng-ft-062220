import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.currentSort === 'name'} onChange={() => props.updateCurrentSort('name')}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.currentSort === 'price'} onChange={() => props.updateCurrentSort('price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.updateCurrentFilter}>
          <option value='all'>All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
