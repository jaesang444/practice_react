import React from 'react';
import ListDescription from './ListDescription';

function Section({sectionObj}){
  return (
    <>
      <li className="section-item">{Object.keys(sectionObj)[0]}</li>
      <ListDescription desc={sectionObj[Object.keys(sectionObj)[0]]} />
    </>
  )
}

function ListSection({data2}) {
  return (
    <ul>
      {
        data2.map(sectionObj =>(
          <Section sectionObj={sectionObj} />
        ))
      }
    </ul>
  )
}

export default ListSection;
