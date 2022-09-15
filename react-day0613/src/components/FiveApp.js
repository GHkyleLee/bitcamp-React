import React, {  useState,useRef } from "react";
import "../App.css";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FiveApp=()=>{

    const [result, setResult]=useState('');
    const nameRef=useRef('');
    const korRef=useRef('');
    const engRef=useRef('');
    const mathRef=useRef('');

    const buttonResult=()=>{
        //데이터 읽어오기
        let name = nameRef.current.value;
        let kor = Number(korRef.current.value);
        let eng = Number(engRef.current.value);
        let math = Number(mathRef.current.value);
        let tot = kor+eng+math;
        let avg = (tot/3).toFixed(2);

        let r=`[결과확인]
이름: ${name}
국어점수:${kor}
영어점수:${eng}
수학점수:${math}
총점:${tot}
평균:${avg}`;
        setResult(r);

        nameRef.current.value='';
        korRef.current.value='';
        engRef.current.value='';
        mathRef.current.value='';

        nameRef.current.focus();
    }


    return (
        <div>
            <Alert severity="info">FiveApp 컴포넌트</Alert>   
            <br/><br/>    
                <TextField                            
                label="이름입력"
                placeholder="이름을 입력하세요"
                inputRef={nameRef}
                />  
                <hr/>
                <TextField              
                label="국어 점수"
                placeholder="국어점수를 입력하세요"
                inputRef={korRef}
                />  
                <hr/>
                <TextField               
                label="영어 점수"
                placeholder="영어점수를 입력하세요"
                inputRef={engRef}
         
                />
                <hr/>
                <TextField                
                label="수학 점수"
                placeholder="수학점수를 입력하세요"
                inputRef={mathRef}

                />
                <hr/>
            <Button variant="contained" color="success" 
            style={{backgroundColor:'yellow' ,fontWeight:'bold',color:'black'}}
            onClick={buttonResult}> 
           결과확인
            </Button>
            <h2 className="alert alert-info" style={{whiteSpace:'pre-wrap'}}>{result}</h2>


        </div>
    )
}

export default FiveApp;