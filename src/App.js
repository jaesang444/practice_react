import React, {useState, useCallback, useRef} from 'react';
import './App.css';
import ListSection from './ListSection';
import CreateSection from './CreateSection';
import BoardSection from './BoardSection';

function App() {
  const [data2, setData2] = useState(
    [
      {
        'General' : [
          { main : 'General #1' , sub : 'Explanation of General #1' },
          { main : 'General #2' , sub : 'Explanation of General #2' },
          { main : 'General #3' , sub : 'Explanation of General #3' },
          { main : 'General #4' , sub : 'Explanation of General #4' },
          { main : 'General #5' , sub : 'Explanation of General #5' },
          { main : 'General #6' , sub : 'Explanation of General #6' },
        ],
      },
      {
        'Stand-up': [
          { main : 'Stand-up #1' , sub : 'Explanation of Stand-up #1' },
          { main : 'Stand-up #2' , sub : 'Explanation of Stand-up #2' },
          { main : 'Stand-up #3' , sub : 'Explanation of Stand-up #3' },
          { main : 'Stand-up #4' , sub : 'Explanation of Stand-up #4' },
          { main : 'Stand-up #5' , sub : 'Explanation of Stand-up #5' },
          { main : 'Stand-up #6' , sub : 'Explanation of Stand-up #6' },
        ]
      },
      {
        'PM-Designer' : [
          { main : 'PM-Designer #1', sub : 'Explanation of PM-Designer #1' },
          { main : 'PM-Designer #2', sub : 'Explanation of PM-Designer #2' },
          { main : 'PM-Designer #3', sub : 'Explanation of PM-Designer #3' },
          { main : 'PM-Designer #4', sub : 'Explanation of PM-Designer #4' },
          { main : 'PM-Designer #5', sub : 'Explanation of PM-Designer #5' },
          { main : 'PM-Designer #6', sub : 'Explanation of PM-Designer #6' },
        ]
      },
      {
        'Data' : [
          { main : 'Data #1', sub : 'Explanation of Data #1' },
          { main : 'Data #2', sub : 'Explanation of Data #2' },
          { main : 'Data #3', sub : 'Explanation of Data #3' },
          { main : 'Data #4', sub : 'Explanation of Data #4' },
          { main : 'Data #5', sub : 'Explanation of Data #5' },
        ]
      },
      {
        'Retro': [
          { main : 'Retro #1', sub : 'Explanation of Retro #1' },
          { main : 'Retro #2', sub : 'Explanation of Retro #2' },
          { main : 'Retro #3', sub : 'Explanation of Retro #3' },
          { main : 'Retro #4', sub : 'Explanation of Retro #4' },
          { main : 'Retro #5', sub : 'Explanation of Retro #5' },
          { main : 'Retro #6', sub : 'Explanation of Retro #6' },
        ]
      },
    ]
  );
  const [section,setSection] = useState('');
  const [input,setInput] = useState([
    { main: '', sub: '' },
    { main: '', sub: '' },
    { main: '', sub: '' },
    { main: '', sub: '' },
    { main: '', sub: '' },
  ]);
  const paintItem = React.createRef();
  // const onChangeInput2 = () => {
  //
  // }
  //
  // const onClickChangeItem = () =>{
  //
  // }

  const onClickChangeColor = e => {
    setTimeout(() => e.target.className='a', 0);
    setTimeout(() => e.target.className='b', 1000);
    //setTimeout paintItem
  }

  const onChangeSection = useCallback (e => {
      setSection(e.target.value);
    }, []
  )

  const onClickAddSection = () => {
      const newSection = {
        [ section ] : []
      }
      setData2(data2=>[...data2, newSection]);
      setInput(input=>[...input, { main : '', sub : ''}]);
      setSection('');
    }

  const onChangeInput = e => {
    const {name, value, id} = e.target;
    const newId = (id[0] === 'm') ? id.substring(4, id.length) : id.substring(3,id.length);
    const newInput = [...input];
    newInput[newId][name]=value;
    setInput(newInput);
  }

  const onClickAddItem = idx => {
    const {main, sub} = input[idx];
    const newData = [...data2];
    newData[idx][Object.keys(newData[idx])[0]].push({main,sub});
    setData2(newData);
    const newInput = [...input];
    newInput[idx]['main'] = '';
    newInput[idx]['sub']='';
    setInput(newInput);
  }

  return (
    <div className="App">
      <div className="top" >Team.Workspace</div>
      <div className="bottom">
        <div className="bottom-left">
          <div className="member">21 members</div>
          <ListSection data2={data2} onClickChangeColor={onClickChangeColor} />
          <CreateSection
            onClickAddSection={onClickAddSection}
            onChangeSection={onChangeSection}
            section={section}
          />
        </div>
        <div className="bottom-right" id="bottom-right">
          <h1>All board</h1>
          <BoardSection
            onClickAddItem={onClickAddItem}
            onChangeInput={onChangeInput}
            data2={data2}
            input={input}
          />
        </div>
      </div>
    </div>
  );
}

export default App;







