import React, { useState } from "react";
import FourthApp from "./FourthApp";

const ThirdApp=()=>{
    const [message,setMessage]=useState('Happy day');

    //이벤트 함수
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            setMessage(''); //message 변수값 지우기
            e.target.value='';  // 입력값 지우기
        }
    }

    return(
        <div>
            <h2 className="alert alert-info">ThirdApp 입니다.</h2>

            <h3 style={{color:'red'}}>{message}</h3>
            <hr/>
            <h4> 메세지를 입력해주세요</h4>
            <input type='text' style={{width:'300px',fontSize:'2em'}} defaultValue={message} onChange={(e)=>{
            //  console.log(e.target.value);
             //message 변수에 입력값 넣기
             setMessage(e.target.value);
             handleEnter(e.target.value);   
             }}
             onKeyUp={handleEnter}
             />
             <hr/>
             <FourthApp/>

        </div>

    )
}
export default ThirdApp;