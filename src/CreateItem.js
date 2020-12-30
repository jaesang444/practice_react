import React from 'react';

function CreateItem({onClickAddItem,onChangeInput,input, idx}) {
  return (
    <>
      <input
        name="main"
        value={input[idx]['main']}
        placeholder='제목'
        onChange={onChangeInput}
        id={"main" + idx}
      />
      <input
        name="sub"
        value={input[idx]['sub']}
        placeholder='내용'
        onChange={onChangeInput}
        id={"sub" + idx}
      />
      <button onClick={()=>onClickAddItem(idx)}>Create Item</button>
    </>
  )
}

export default CreateItem;
