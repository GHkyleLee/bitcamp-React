import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';



import Avatar from '@mui/material/Avatar';


import { orange, red } from '@mui/material/colors';
import { maxWidth } from "@mui/system";





const ShopRowitem=({idx,row})=>{

    const navi=useNavigate();

    let photoUrl="http://localhost:9001/save/";

    return (
        <div style={{float:"left",marginLeft:"25px",marginBottom:"15px",border:'3px solid black',borderRadius:"10px",
        width:"300px", height:"400px", maxHeight:"400px"}}>
    <Card sx={{ maxWidth: 300, hight: 300}} onClick={()=>{
        // navi(`/shop/detail/${row.num}`)
        navi("/shop/detail/"+row.num); //위와같음
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
            
           {idx+1}
          </Avatar>
        }

        title={row.sangpum}
        subheader={row.ipgoday}
      />
      <CardMedia style={{height:"fit-content", width:"fit-content"}}
        component="img"
        maxWidth="300px"
        
        image ={photoUrl+row.photo}
        
        alt="" 
      />
    </Card>
        </div>

    )
}

export default ShopRowitem;
