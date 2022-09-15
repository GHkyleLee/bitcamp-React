import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';

const OneApp=()=>{
    //배열 변수 선언
    const names=['이미자','강호동','이영자','유재석','김숙'];

    //반복문을 변수에 저장후 출력해도 됨
    const nameList=names.map((name)=>(<li>{name}</li>));//리턴

    //색상을 배열로
    const colors=['red', 'green', 'orange', 'gray', 'pink', 'magenta', 'cyan', 'yellow'];

    return (
        <div style={{marginLeft:'10px'}}>
             <Alert severity="error" style={{fontSize:'20px'}}>
            OneApp 컴포넌트 연습  <AddToHomeScreenIcon style={{fontSize:'35px',color:'red'}}/> </Alert>
            <span class="material-symbols-outlined" style={{color:'magenta'}}>star</span>
            <div>
                <h3>map 반복문 연습</h3>
                <ol>{nameList}</ol>
                <hr/>
                <ul>
                    {
                        names.map((name,index)=>(<b style={{marginLeft:'10px'}}>{index}:{name}</b>))
                    }
                </ul>
                <hr/>
                {
                    colors.map((color)=>(<div className="box" style={{background:color}}/>))
                }

            </div>
        </div>
       
    )
}

export default OneApp;