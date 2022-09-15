import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import '../Member.css'



const LoginFrom=()=>{

    const [id,setId]=useState("");
    const [pass,setPass]=useState("");
    const navi=useNavigate();


    const onSubmit=(e)=>{
        e.preventDefault();
        const url=process.env.REACT_APP_SPRING_URL+"member/login";
        axios.post(url,{id,pass})
        .then(res=>{
            if(res.data===0){
                alert("아이디 또는 비밀번호가 맞지 않습니다.")
            }else{
                localStorage.user_id=id;
               
                navi("/");
                window.location.reload();
            }
        })
    }


    return (
        
        <div>
            <form onSubmit={onSubmit}>
                <table className="table table-bordered" style={{width:'350px'}}>
                    <caption><b><h3>회원로그인</h3></b></caption>
                    <tbody>
                        <tr>
                            <td width='200px'>
                                <input type='text' placeholder="아이디"
                                style={{width:'180px'}} className="loginput" required
                                onChange={(e)=>{
                                    setId(e.target.value);
                                }}/>    
                            </td>
                            <td rowSpan={2}>
                                <button type="submit" className="loginput"
                                style={{width:'100%',height:'80px'}}>로그인</button>
                            </td> 
                        </tr>
                        <tr>
                        <td width='200px'>
                              <input type='password' placeholder="비밀번호"
                                style={{width:'180px'}} className="loginput" required
                                onChange={(e)=>{
                                    setPass(e.target.value);
                                }}/>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>

    )
}

export default LoginFrom;
