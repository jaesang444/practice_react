import React from 'react';

function CreateSection({onClickAddSection, onChangeSection}) {
  return (
    <>
      <input placeholder='섹션 추가' onChange={onChangeSection}/>
      <button onClick={onClickAddSection}>+ add section</button>
    </>
  )
}

export default CreateSection;
