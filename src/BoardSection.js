import React from 'react';
import BoardItems from './BoardItems';
import CreateItem from './CreateItem';

function BoardSection({onClickAddItem, onChangeInput, data2, input}){
  return (
    <ul className='items'>
      {
        data2.map((sectionObj, idx)=>(
          <div key={'a' + idx}>
            <li className='boxes' key={'b' + idx}>{Object.keys(sectionObj)[0]}</li>
            <BoardItems desc={sectionObj[Object.keys(sectionObj)[0]]} key={'c' + idx} />
            <CreateItem
              onClickAddItem={onClickAddItem}
              onChangeInput={onChangeInput}
              input={input}
              idx={idx}
              key={idx}
            />
          </div>
        ))
      }
    </ul>
  )
}


export default BoardSection;
