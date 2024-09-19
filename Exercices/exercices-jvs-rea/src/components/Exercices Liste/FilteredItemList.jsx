import React from 'react';

function FilteredItemList(props) {
    const filteredItems = props.items.filter(item =>
      item.toLowerCase().includes(props.query.toLowerCase())
    );
  
    return (
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

export default FilteredItemList;