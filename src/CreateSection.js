import React from 'react';

function CreateSection({onClickAddSection, onChangeSection, section}) {
  return (
    <>
      <input placeholder='섹션 추가' onChange={onChangeSection} value={section}/>
      <button onClick={onClickAddSection}>+ add section</button>
    </>
  )
}

export default CreateSection;
