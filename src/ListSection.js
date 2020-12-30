import React from 'react';
import ListDescription from './ListDescription';

function Section({sectionObj, onClickChangeColor}){
  return (
    <>
      <li className="section-item">{Object.keys(sectionObj)[0]}</li>
      <ListDescription
        desc={sectionObj[Object.keys(sectionObj)[0]]}
        onClickChangeColor={onClickChangeColor}
      />
    </>
  )
}

function ListSection({data2,onClickChangeColor}) {
  return (
    <ul>
      {
        data2.map((sectionObj, idx) =>(
          <Section
            sectionObj={sectionObj}
            key={idx}
            onClickChangeColor={onClickChangeColor}
          />
        ))
      }
    </ul>
  )
}

export default ListSection;
