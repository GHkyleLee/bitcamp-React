import React, { useState } from "react";
import "../App.css";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { createTheme } from '@mui/material/styles';



const EightSub2App=({dataSave})=>{
    const [color,setColor]=useState('#ccccff');

    const addDataEvent=()=>{
        //부모 컴포넌트의 onSabe 호출
        dataSave(color);
    };

    return(
        <div style={{width: '500px'}}>
            <h4> EightSub2App 컴포넌트입니다.</h4>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 30 }}>
            <input type="color" style={{width:"100px", height:"30px"}} 
            defaultValue={color}
            onChange={(e)=>{setColor(e.target.value)}}/>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 30 }}>
            <Button variant="contained" color="success" style={{backgroundColor:'yellow' ,fontWeight:'bold',color:"black"}}
            onClick={addDataEvent}> 
                     추가
            </Button>
            </FormControl>

                
        </div>
    )
}
export default EightSub2App;