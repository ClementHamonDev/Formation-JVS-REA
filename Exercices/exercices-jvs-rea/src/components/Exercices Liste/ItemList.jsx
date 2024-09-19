import React from 'react';
function ItemList(props) {
    return (
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

export default ItemList;