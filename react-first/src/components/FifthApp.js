import React, { useState } from "react";
import "./MyStyle.css";

const FifthApp=()=>{
    
    const [name,setName]=useState('');
    const [java,setJava]=useState('');
    const [spring,setSpring]=useState('');
    const [sum,setSum]=useState(0);
    const [avg,setAvg]=useState(0);

    const [imgStyle,setImgStyle]=useState({display:'none'})

    
    return(
        <div>
            <div className="inp">
            <h2>이름<input type='text' style={{width:'160px', marginLeft:'25px'}} onChange={(name)=>{
             setName(name.target.value);   
             }}></input><span style={{marginLeft:'10px'}}>{name}</span></h2>
            <h2>자바<input type='text' style={{width:'160px', marginLeft:'25px'}} onChange={(java)=>{
             setJava(parseInt(java.target.value));   
             }}></input><span style={{marginLeft:'10px'}}>{java}</span></h2>
            <h2>스프링<input type='text' style={{width:'160px', marginLeft:'25px'}}onChange={(spring)=>{
             setSpring(parseInt(spring.target.value));   
             }}></input><span style={{marginLeft:'10px'}}>{spring}</span></h2>
             <button type="button" className="button" style={{backgroundColor:'black',width:'100px', hight:'100px',color:'yellow',fontWeight:'bold'}}   onClick={()=>{
                setSum(Number(java)+Number(spring));
                setAvg((Number(java)+Number(spring))/2);

                setImgStyle({display:''});
             }}>
            확인</button>
            <button type="button" className="button" style={{marginLeft:'50px',backgroundColor:'black',width:'100px', hight:'100px',color:'yellow',fontWeight:'bold'}}   onClick={()=>{
                setName("");
                setJava("");
                setSpring("");
                setImgStyle({display:'none'});
             }}>
           취소</button>
             
            </div>

            <div style={imgStyle} className='result'>
            <h2>이름 : {name}</h2>
            <h2>자바: {java}</h2>
            <h2>스프링 : {spring}</h2>
            <h2>총점 : {sum} 점</h2>
            <h2>평균 : {avg} 점 </h2>
            
            </div>

        </div>

    )
}

export default FifthApp;