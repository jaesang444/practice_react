import React from 'react';

function ListDescription({desc}) {
  return (
    <ul className="items">
      {
        desc.map(e => (
          <button className="plain">
            <li>{e.main}</li>
          </button>
        ))
      }
    </ul>
  )
}

export default ListDescription;
