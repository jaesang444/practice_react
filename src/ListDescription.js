import React from 'react';

function ListDescription({desc}) {
  return (
    <ul className="items">
      {
        desc.map((item, idx) => (
          <button className="plain" key={idx}>
            <li>{item.main}</li>
          </button>
        ))
      }
    </ul>
  )
}

export default ListDescription;
