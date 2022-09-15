import React, { useState } from "react";

const SixApp=()=>{

    const [show,setShow]=useState(true);
    const [visible,setVisible]=useState('visible');
    const [line,setLine]=useState('solid')


    const changeshow=(e)=>{
        setShow(!show);
    }
    const chageline=(e)=>{
        setLine(e.target.value);
    }

    return (
        <div>
          <h3 className='alert alert-info'>SixApp 입니다</h3>
          <div style={{marginLeft:'50px'}}>
          <button type="button" className="btn btn-info" onClick={changeshow}>
              boolean 으로 이미지 보였다 안보였다 하기 
          </button>

          { show && <img src="../image2/c1.png" alt=""/>}
          <br/><br/>
          <button type="button" className="btn btn-warning" onClick={()=>{
              setVisible(visible==='hidden'?'visible':'hidden');
          }}>
              style 로 이미지 보였다 안보였다 하기 
          </button>
          <br/><br/>
          <select className="select"onChange={chageline} >
            <option>solid</option>
            <option>dotted</option>
            <option>groove</option>
            <option>double</option>
            <option>inset</option>
            <option>outset</option>
            <option>dashed</option>
            <option>ridge</option>
          </select>



          <img src="../image2/c5.png" alt=""
          style={{visibility:visible,borderStyle:line}} className="greenline"/>
          <br/><br/>
          </div>
        </div>
    )
}

export default SixApp;