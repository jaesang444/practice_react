import React from 'react';

function BoardItems({desc}) {
  return (
    <ul>
      {
        desc.map((item, idx) => (
          <button key={idx} style={{margin:30, borderColor:'black'}}>
            <li className='box'>
              {item.main}
              <br />
              {item.sub}
            </li>
          </button>
        ))
      }
    </ul>
  )
}

export default BoardItems;
