import React, {useState, useEffect, useCallback} from "react";
import '../App.css';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const BoardList2 = () => {

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
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {data && data.map((item,idx) => (
          <ImageListItem key={idx}>
            <img
              src={`${photoUrl+item.photo}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${photoUrl+item.photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={photoUrl+item.photo}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

    );
};

export default BoardList2;