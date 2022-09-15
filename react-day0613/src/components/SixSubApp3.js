import React,{useState} from "react";
import "../App.css";
import Button from '@mui/material/Button';
const SixSub3App=(props)=>{
    return(
        <div>
            <Button variant="contained" color="success" 
            style={{backgroundColor:'yellow' ,fontWeight:'bold',color:'black', marginLeft:'320px',borderRadius:'100px', border:'2px solid black'}}
            onClick={()=>{
                props.incre() //부모 컴포넌트의 이벤트 발생
            }}>
                증가</Button>
                <Button variant="contained" color="success" 
            style={{backgroundColor:'yellow' ,fontWeight:'bold',color:'black', marginLeft:'80px',borderRadius:'100px', border:'2px solid black'}}
            onClick={()=>{
                props.derce() //부모 컴포넌트의 이벤트 발생
            }}>
                감소</Button>
        </div>
    )
}
export default SixSub3App;