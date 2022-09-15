import React, { useRef, useState } from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const FourApp =()=>{

    //useRef : 변수관리하는 기능
    //state 와의 차이점: 값이 변경되어도 다시 랜더링 하지 않음

    const [count,setCount]=useState(0);
    //ref 선언하는 방법
    const countRef=useRef(0);

    //state 변수 증가하는 함수
    const stateIncre=()=>{
        setCount(count+1);
    }

    //ref 변수 증가하는 함수
    const refIncre=()=>{
        countRef.current=countRef.current+1;
        console.log("countRef="+countRef.current);
    }

    return(
        <div>
            <Alert severity="info">FourApp 컴포넌트</Alert>
            <Button variant="contained" color="success" style={{backgroundColor:'red' ,fontWeight:'bold'}} onClick={stateIncre}> 
            state 변수 증가
            </Button>
            <div className="number">{count}</div>
            <Button variant="contained" color="success" style={{backgroundColor:'yellow' ,fontWeight:'bold',color:'black'}}onClick={refIncre}> 
            state 변수 증가
            </Button>
            <div className="number">{countRef.current}</div>
        </div>
    )
}
export default FourApp;
