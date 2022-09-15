import React from "react";
import '../App.css';
import {useParams,useNavigate} from 'react-router-dom';

const Food=()=>{

    const {food1,food2}=useParams();
    const navi=useNavigate();


    return(
        <div>
            <div>
                {food1=='2'?<h3>오늘의 점심식사메뉴입니다.</h3>:<h3>오늘의 저녁식사메뉴입니다.</h3>}
             <img src={`${process.env.PUBLIC_URL}/image/${food1}.jpg`} alt="" className="foodmenu"/>
             <img src={`${process.env.PUBLIC_URL}/image/${food2}.jpg`} alt="" className="foodmenu" /></div>
             <br></br>
             <button type="button" className="btn btn-danger" style={{border: '2px solid black',backgroundColor:"yellow",borderRadius:'100px',width:'100px',height:'40px'}}
             onClick={()=>{
                navi(-1);
             }}>이전페이지</button> 
        
        </div>
    )
}

export default Food;