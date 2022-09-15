import React from "react";
import '../App.css';
import infoimg from '../image/R.png';

const Info=()=>{

    return (
        <div >
            <img src={infoimg} alt="" style={{width:'250px'}}/>
            <br/><br/>
            <div style={{marginLeft:"80px"}}>
            <div style={{fontFamily:"Jua"}}> 당근마켓</div>
            <div style={{fontFamily:"Jua"}}> 02-222-3333</div>
            </div>
        </div>

    )
}

export default Info;
