import React, { useState } from "react";
import "../App.css";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EightSubApp from "./EightSubApp";
import { HexColorPicker } from "react-colorful";
import EightSub2App from "./EightSubApp2";

const EightApp=()=>{
    const [color,setColor]=useState("#ffccff");
    const [message,setMessage]=useState('Have a Nice Day!!!');
    const [photo,setPhoto]=useState('s5');
    const [likeColor,setLikeColor]=useState(['pink','yellow','gray'])
    //데이타 추가하는 함수 이벤트
    const dataSave=(data)=>{
            setLikeColor(likeColor.concat(data));
        }
        //더블 클릭시 색상 제거
        const deleteLikeColor=(idx)=>{
            setLikeColor(likeColor.filter((item,i)=>(i!==idx)));
          }

    return(
        <div>
            <Alert severity="info">EightApp 부모,자식 컴포넌트 </Alert>

            <br/>
            <h1 style={{color:color}}>{message}</h1>
            <img alt="" src={`../image/${photo}.JPG`}/>
            <br style={{clear:'both'}}/><br/>
            {
                likeColor.map((co,idx)=>(<div className="circle" 
                style={{backgroundColor:co, textAlign:"center",lineHeight:"60px"}}
                onDoubleClick={()=>{deleteLikeColor(idx);
                }}>{idx}</div>))
            }
            <EightSubApp changeColor={setColor} getColor={color} changeMessage={setMessage} getMessage={message} chagePhoto={setPhoto} photo={photo}/>
            <br/>
            <EightSub2App dataSave={dataSave}/>
        </div>
    )
}
export default EightApp;