import React,{useState} from 'react';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import CloudIcon from '@mui/icons-material/Cloud';

function App() {

  const [idx,setIdx]=useState(4);

  const selectComponent=(e)=>{
    console.log(e.target.value);
    setIdx(Number(e.target.value));
  } 

  const selectCom=["OneApp","TwoApp","ThreeApp","FourApp"];
  const selectList=selectCom.map((componet, i)=>(
     
    <label>
        <input type='radio' name='comp' defaultValue={i+1}  onClick={selectComponent}  />{componet}
    </label>));

 
 
  return (
    <div>
      <div className='nav'>
        <CloudIcon/>
      {selectList}

      </div>
      <hr style={{backgroundColor:'red', border:'none',height: '4px'}}/>
        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:<FourApp/>}
    </div>
  );
}

export default App;
