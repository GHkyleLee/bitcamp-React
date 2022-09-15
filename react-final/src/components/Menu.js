import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return (
        <div style={{textAlign:"center",marginLeft:"500px"}}>
            
            <NavLink to='/' className="button btnPush btnBlueGreen">Home</NavLink>
            <NavLink to='/shop/list' className="button btnPush btnLightBlue">당근 상점</NavLink>
            <NavLink to='/board/list/1' className="button btnPush btnGray">당근 게시판</NavLink>
            <NavLink to='/about' className="button btnPush btnPurple">오시는길</NavLink>
            <NavLink to='/memo' className="button btnPush btnBlueGreen">Memo</NavLink>
            
        </div>

    )
}

export default Menu;
