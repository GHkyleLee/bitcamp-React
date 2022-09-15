import React, { useRef, useState } from "react";
import "../App.css";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SixSubApp from "./SixSubApp";
import SixSub2App from "./SixSubApp2";
import SixSub3App from "./SixSubApp3";

const SixApp=()=>{

    const [number,setNumber]=useState(10);

    // 증가하는 이벤트 함수
    const numberIncre=()=>{
        setNumber(number+1);
    }

    // 감소하는 이벤트 함수
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return(
        <div>
             <Alert severity="error">SixApp 컴포넌트 - 부모, 자식 컴포넌트간 통신</Alert>
            <br/>
             <SixSubApp name="캔디" age="23"/>
             <SixSubApp name="테리우스" age="31"/>
             <SixSubApp name="마징가" age="29"/>

             <br/><br/>
             <SixSub2App flower="장미꽃" price="12000" linecolor="red"/>
             <SixSub2App flower="안개꽃" price="26000" linecolor="pink"/>
             <SixSub2App flower="국화꽃" price="17000" linecolor="green"/>
             <br/><br/>
            <div className="number" style={{marginLeft:'400px'}}>{number}</div>
            <SixSub3App incre={numberIncre} derce={numberDecre}/>
        </div>
    )
}
export default SixApp;