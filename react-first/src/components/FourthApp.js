import React, { useState } from "react";

const FourthApp=()=>{
    const [message,setMessage]=useState('기생문');
    const [name,setName]=useState('김말자');
    const [age,setAge]=useState(23);
    return(
        <div>
            <h2 className="well"> FourthApp <img src="../s4.JPG" alt="" className="img-circle" style={{width:'40px'}}/></h2>
            <h2>{message}</h2>
            <b style={{fontSize:'30px'}}>
                 이름 : {name} <span style={{marginLeft:'20px'}}> 나이 : {age} 세</span> 
            </b>
            <br/>
            <br/>
            <button type="button" className="btn btn-default" style={{marginLeft:'100px'}}
            onClick={()=>{
                setName("강호동");
                setAge(30);
            }}>값 변경</button>
            <button type="button" className="btn btn-default" style={{marginLeft:'10px'}}
            onClick={()=>{
                setName("");
                setAge("");
            }}
            >초기화</button>

        </div>
    )

}
export default FourthApp;