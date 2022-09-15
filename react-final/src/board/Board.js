import React, {useState, useEffect} from "react";
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import BoardList1 from "./BoardList1";
import BoardList2 from "./BoardList2";
import BoardList3 from "./BoardList3";
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';

const Board = () => {
    const [show, setShow] = useState(1);
    const navi = useNavigate();

    return (
        <div>
            <button className="btn btn-info btn-lg" onClick={() => {navi('/Board/form')}}>글쓰기</button>
            <div className="listStyle">
                <ViewListIcon className="boardBtn" style={{fontSize:'35px',cursor:'pointer',
                color:show===1?'green':'magenta'}} onClick={() => {
                    setShow(1);
                }}>board 1 컴포넌트</ViewListIcon>
                <GridViewIcon className="boardBtn" style={{fontSize:'35px',cursor:'pointer',
                color:show===2?'green':'magenta'}} onClick={() => {
                    setShow(2);
                }}>board 2 컴포넌트</GridViewIcon>
                <SplitscreenIcon className="boardBtn" style={{fontSize:'35px',cursor:'pointer',
                color:show===3?'green':'magenta'}} onClick={() => {
                    setShow(3);
                }}>board 3 컴포넌트</SplitscreenIcon>
            </div>
            {show===1?<BoardList1/>:show===2?<BoardList2/>:<BoardList3/>}
        </div>
    )
}

export default Board;