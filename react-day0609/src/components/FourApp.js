import React, { useState } from "react";
import '../App.css';
//이미지 5개 선언

import img1 from '../image/s1.JPG';
import img2 from '../image/s2.JPG';
import img3 from '../image/s3.JPG';
import img4 from '../image/s4.JPG';
import img5 from '../image/s5.JPG';

const FourApp=()=>{

    const [hp1 ,setHp1]=useState('02');
    const [hp2 ,setHp2]=useState('0000');
    const [hp3 ,setHp3]=useState('0000');
    const [photo,setPhoto]=useState(1);

    const changeHp1=(e)=>{
        setHp1(e.target.value);
    }
    const changeHp2=(e)=>{
        setHp2(e.target.value);
    }
    const changeHp3=(e)=>{
        setHp3(e.target.value);
        }
    const changePhoto=(e)=>{
        setPhoto(Number(e.target.value));
    }

  
    return(
        <div >
             <h3 className="alert alert-info">FourApp 컴포넌트입니다.</h3>

             <div style={{marginLeft:"40px"}}>
             <span>
                <select className="select" onChange={changeHp1}>
                    <option value="02">서울 02 </option>
                    <option value="051">부산 051 </option>
                    <option value="053">대구 053 </option>
                    <option value="032">인천 032 </option>
                    <option value="043">충북 043 </option>
                    <option value="010">010 </option>
                </select>
                <b style={{fontSize:"50px"}}> - </b>
                <input type="text" maxLength="4" onChange={changeHp2} style={{width:"150px",fontSize:"40px",fontFamily:"Dongle"}} />
                <b style={{fontSize:"50px"}}> - </b>
                <input type="text" maxLength="4" onChange={changeHp3} style={{width:"150px",fontSize:"40px",fontFamily:"Dongle"}}  />
                <br></br>
                <b style={{marginLeft:'50px',position:"absolute",top:"260px"}}>이미지 선택:</b>
                <select className="form-control" onChange={changePhoto} style={{width:"500px",top:"260px",left:"200px",position:"absolute"}}>
                    <option value="1">철수</option>
                    <option value="2">민수</option>
                    <option value="3">영희</option>
                    <option value="4">길동</option>
                    <option value="5">헉수</option>
                </select>
                <br/><br/>  <br/><br/>
                <div>
                <h1>{hp1}-{hp2}-{hp3}</h1>
                </div> 
               

   
             </span>
             <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} alt="" className="photo"/>
             </div>
                
        </div>
    )

}
export default FourApp;