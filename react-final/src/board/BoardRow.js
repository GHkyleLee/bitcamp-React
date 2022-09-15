import React, {useState, useEffect} from "react";
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const BoardRow = ({row,idx,photoUrl}) => {

    return (
        <tr>
        <td>{row.num}</td>
        <td>
            <img alt="" className="photo_small" src={photoUrl+row.photo}/>
            <b>{row.subject}</b>
        </td>
        <td>
            {row.id}
        </td>
        <td>
            {row.readcount}
        </td>
    </tr>
    
    );
};

export default BoardRow;