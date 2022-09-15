import React,{useState} from "react";
import "../App.css";
import Button from '@mui/material/Button';

const RowItemApp=({row,onRemove,idx})=>{

    const deleteRemove=()=>{
        onRemove(idx);
    }


    return(
        
           <tr style={{textAlign:'center', verticalAlign:'middle'}}>
                <td style={{verticalAlign:'middle'}}>{row.name}</td>
                <td>
                    <img src={`../image/${row.photo}.JPG`} alt='' 
                    style={{width:'100px',height:'100px', border:'1px solid gray', verticalAlign:'middle',borderRadius:'80px'}}/>
                </td>
                <td style={{verticalAlign:'middle'}}>{row.blood} 형</td>
                <td style={{verticalAlign:'middle'}}>{row.today.toLocaleDateString('ko-KR')}</td>
                <td style={{verticalAlign:'middle'}}>
                <Button variant="contained" color="success" 
                style={{backgroundColor:'yellow' ,fontWeight:'bold',color:'black', border:'1px solid black', borderRadius:'100px'}}
                  onClick={deleteRemove}> 
                삭제
            </Button>
                </td>

           </tr>
     
    )
}
export default RowItemApp;