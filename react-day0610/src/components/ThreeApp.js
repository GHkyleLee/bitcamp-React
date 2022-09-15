import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ThreeApp=()=>{

    const [names,setName]=useState(['이영자','강호동','유재석','김숙', '송은이']);
    const [irum,setIrum]=useState('')

    

    //추가 버튼 이벤트
    const btnInsert=()=>{
        if(irum===''){
            alert("이름을 입력후 추가해주세요!!");
            return;
        }
        setName(names.concat(irum));// 배열에 irum 데이타 추가
        setIrum('');
    }
    
    //입력 keyup 이벤트
    const txtEnter=(e)=>{
        if(e.key==="Enter"){
            btnInsert();
            e.target.value='';
        }
    }
    //입력 change 이벤트
    const textInput=(e)=>{
        setIrum(e.target.value);
    }
    //더블 클릭시 이름 삭제 이벤트
    const dataRemove=(index)=>{
        //console.log(index);
        // 방법1
        // setName([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1,names.length)
        // ]); //index번지만 빼고 잘라서 넣음

        //방법2
        setName(names.filter((item,i)=>i!==index)); //index번지만 걸러냄
    }

    return (
        <div>
            <Alert severity="info" style={{fontSize:'20px'}}>ThreeApp 컴포넌트 연습</Alert>
            <div style={{marginLeft:'20px', marginTop:'15px'}}>
            <TextField
          error
          label="이름입력"
          value={irum}
          size="small"
          onKeyUp={txtEnter}
          onChange={textInput}
        />
        &nbsp;&nbsp;
        <Button variant="contained" color="success" style={{marginTop:"2px",backgroundColor:"purple"}} onClick={btnInsert}>
        <b>추가</b>
        </Button>
        &nbsp;&nbsp;
        <Button variant="outlined" color="error" style={{marginTop:"2px",backgroundColor:"purple", color:"yellow"}}>
        <b>삭제</b>
        </Button>
     
        
        <br/>
        <h5>이름에서 더블클릭하면 삭제됩니다.</h5>
        <ul>
            {names.map((ns,index)=>(<li className="data" key={index} onDoubleClick={()=>dataRemove(index)}>{ns}</li>)
            )}
        </ul>
        </div>

        </div>
    )
}

export default ThreeApp;