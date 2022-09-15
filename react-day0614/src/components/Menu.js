import React from "react";
import '../App.css';
import {NavLink} from'react-router-dom';


const Menu=()=>{

    return(
        <div>
            <ul className="menu">
                <li><NavLink to="/" style={{textDecoration:"none",color:'black'}}> Home </NavLink></li>
                <li><NavLink to="/about" style={{textDecoration:"none",color:'black'}}> About </NavLink></li>
                <li><NavLink to="/about/lee" style={{textDecoration:"none",color:'black'}}> About2 </NavLink></li>
                <li><NavLink to="/food/2/4" style={{textDecoration:"none",color:'black'}}> 점심식사 </NavLink></li>
                <li><NavLink to="/food/5/7" style={{textDecoration:"none",color:'black'}}> 저녁식사 </NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;