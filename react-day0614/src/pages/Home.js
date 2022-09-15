import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navi=useNavigate();
    return(
        <div>
            <br/><br/><br/>
            <button type="button" className="btn btn-danger" style={{border: '2px solid black',backgroundColor:"red",borderRadius:'100px'}}
            onClick={()=>{
                navi("/about");
            }}>About</button>
            <button type="button" className="btn btn-danger" style={{border: '2px solid black',backgroundColor:"gold",borderRadius:'100px'}}
            onClick={()=>{
                            navi("/about/순자");
            }}>About2</button>
            <button type="button" className="btn btn-danger" style={{border: '2px solid black',backgroundColor:"greenyellow",borderRadius:'100px'}}
            onClick={()=>{
                navi("/food/8/9");
            }}>점심메뉴</button>
            <button type="button" className="btn btn-danger" style={{border: '2px solid black',backgroundColor:"yellow",borderRadius:'100px'}}
            onClick={()=>{
            navi("/food/11/12");
             }}>저녁메뉴</button>
            
        </div>
    )
}

export default Home;