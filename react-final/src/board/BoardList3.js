import React, {useState, useEffect, useCallback} from "react";
import '../App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const BoardList3 = () => {

    const [data,setData]=useState('');
    
    //url 선언
    let pagelistUrl=process.env.REACT_APP_SPRING_URL+"board/alllist";
    let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

    //시작시 호출되는 함수
    const pageList=useCallback(()=>{
        axios.get(pagelistUrl)
        .then(res=>{
            setData(res.data);
            console.log(res.data)
        })
    },[pagelistUrl])


    
    useEffect(()=>{
        pageList();
    },[pageList]);

    return (
        <ImageList sx={{ width: 850, height: 1000 }}>
        {data && data.map((item) => (
          <ImageListItem key={photoUrl+item.photo}>
            <img
              src={`${photoUrl+item.photo}?w=150&fit=crop&auto=format`}
              srcSet={`${photoUrl+item.photo}?w=150&fit=crop&auto=format&dpr=2 2x`}
              alt={item.subject}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.subject}
              subtitle={<span style={{fontSize:"14px"}}>내용: {item.content}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      );
};

export default BoardList3;