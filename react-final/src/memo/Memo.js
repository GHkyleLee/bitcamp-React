import React, { useState, useEffect } from "react";
import '../App.css';
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import MemoRowitem from "./MemoRowitem";
import { useNavigate, useParams } from "react-router-dom";


const Memo = () => {
    
    const SpringURL=process.env.REACT_APP_SPRING_URL;
    const [memoList, setMemoList] = useState([]);
    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");
    const {num}=useParams();
    const [total,setTotal]=useState("")
   

    let insertUrl = SpringURL+"memo/insert";
    let url = "http://localhost:9001/memo/list";

    const list = () => {  
        axios.get(url)
            .then(res => {
                //스프링으로부터 받아온 List 를 shopList 에 넣기
                setMemoList(res.data);
                setTotal(res.data.length);
            }).catch(err=>{
                alert(err);
            });
    }



    //추가하는 함수 이벤트
    function onInsert() {
        if (nickname == "") {
            alert("닉네임을 입력하세요 ");
        }
        else {
            axios.post(insertUrl, { nickname, message })
                .then(res => {
                    setNickname("");
                    setMessage("");
                });
        }
    }


    //처음 렌더링시 딱 한번 데이타 가져오기
    useEffect(() => {
        //console.log("list");
        list();
    },[list()]);




  


    return (
        <div>

            <FormControl variant="filled" sx={{ m: 2, minWidth: 50 }}>

                <TextField
                    required
                    id="filled-required"
                    label="닉네임 입력"
                    value={nickname}
                    variant="filled"
                    onChange={(e) => {
                        setNickname(e.target.value)
                    }}
                />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 2, minWidth: 500 }}>
                <TextField id="standard-basic" label="메모입력" variant="standard" value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }} />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 2, minWidth: 50 }}>
                <Button variant="contained" color="success" style={{ backgroundColor: 'yellow', fontWeight: 'bold', color: "black" }}
                    onClick={() => {
                        onInsert()
                    }}>
                    메모입력
                </Button>
            </FormControl>
            <div style={{ width: '1200px' }}>

        
                 {
                    memoList.map((row, idx) => (
                        <MemoRowitem key={idx} idx={idx} row={row} total={total}/>
                    ))
                }  
            
    
            </div>


        </div>
    )
}
export default Memo;
