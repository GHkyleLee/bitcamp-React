import React, { useRef, useState } from "react";
import "../App.css";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RowItemApp from "./RowItemApp";
import WriteForm from "./WriteForm";


const SevenApp =()=>{
    const [board,setBoard]=useState([
        {
            name:'이영자',
            photo:'s2',
            blood:'AB',
            today: new Date()
        },
        {
            name:'강호동',
            photo:'s4',
            blood:'O',
            today: new Date()
        },
        {
            name:'기미닉',
            photo:'s6',
            blood:'A',
            today: new Date()
        }
    ]);

    //데이타 추가하는 함수 이벤트
    const dataSave=(data)=>{
        setBoard(board.concat({
            ...data,
            today:new Date()
        }));

    }
    //데이타 삭제하는 이벤트
    const dataRemove=(index)=>{
        setBoard(board.filter((sas,idx)=>idx!==index))
    }

    return(
        <div>
            <Alert severity="info">SevenApp 컴포넌트 </Alert>
            <WriteForm onSave={dataSave}/>
            <table className="table table-bordered" style={{width:'500px', marginLeft:'100px', verticalAlign:'middle'}}>
                <caption><b>Board 배열 출력</b></caption>
                <thead>
                    <tr style={{backgroundColor:'yellow'}}>
                        <th width='100' style={{textAlign:'center'}}> 이름 </th>
                        <th width='130' style={{textAlign:'center'}}> 사진 </th>
                        <th width='60' style={{textAlign:'center'}}> 혈액형 </th>
                        <th width='100' style={{textAlign:'center'}}> 날짜 </th>
                        <th width='60' style={{textAlign:'center'}}> 삭제 </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        board.map((row,index)=>(<RowItemApp row={row} key={index} idx={index} onRemove={dataRemove}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default SevenApp;