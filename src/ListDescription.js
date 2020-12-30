import React from 'react';

function ListDescription({desc, onClickChangeColor}) {
  return (
    <ul className="items">
      {
        desc.map((item, idx2) => (
          <button
            className="plain"
            key={idx2}
            onClick={onClickChangeColor}
          >
            <li>{item.main}</li>
          </button>
        ))
      }
    </ul>
  )
}

export default ListDescription;
