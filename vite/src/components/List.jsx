import React from "react";

const List = ({items, onItemChange}) => {
  return(
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={()=> onItemChange(item.id)}>
              Add !!!
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default List;
