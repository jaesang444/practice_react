import React from 'react';

function CreateItem({onClickAddItem,onChangeInput,inputs, idx}) {
  return (
    <>
      <input name="main" value={inputs[idx]['main']} placeholder='제목' onChange={onChangeInput} id={idx}/>
      <input name="sub" value={inputs[idx]['sub']} placeholder='내용' onChange={onChangeInput} id={idx}/>
      <button onClick={()=>onClickAddItem(idx)}>Create Item</button>
    </>
  )
}

export default CreateItem;
