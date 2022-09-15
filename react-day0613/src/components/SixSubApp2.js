import React,{useState} from "react";
import "../App.css";

const SixSub2App=({flower,price,linecolor})=>{
    return(
        <div>
            <div className="line" style={{borderColor:linecolor}}>{flower} 1단의 가격은 {price}원 입니다.</div>
        </div>
    )
}
export default SixSub2App;