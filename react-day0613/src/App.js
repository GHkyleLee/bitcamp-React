import React,{useState} from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';
import EightApp from './components/EightApp';

function App() {
  const selectCom=["OneApp","TwoApp","ThreeApp","FourApp","FiveApp","SixApp","SevenApp","EightApp"];
  const [idx,setIdx]=useState(selectCom.length);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  } 
  
  const selectList=selectCom.map((componet, i)=>(
     
    <label>
        <input type='radio' name='comp' defaultValue={i+1}  onClick={selectComponent} defaultChecked={selectCom.length}/>{componet}&nbsp;&nbsp;
    </label> ));

  return (
    <div>
      <div className='nav'>
      {selectList}
      </div>
      <hr style={{backgroundColor:'red', border:'none',height: '4px'}}/>
        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:idx===7?<SevenApp/>:<EightApp/>}
    </div>
  );
}
export default App;
