/* eslint-disable no-restricted-globals */
import React,{useState,useEffect} from "react";
import '../App.css';
import infoimg from '../image/R.png';

import {useParams,useNavigate} from 'react-router-dom';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { height } from "@mui/system";



const ShopDetail=()=>{

    const SpringURL=process.env.REACT_APP_SPRING_URL;
    const {num}=useParams();
    const [data,setData]=useState('');
    //url 등록
    let detailUrl=SpringURL+"shop/detail?num="+num;
    let photoUrl=SpringURL+"save/";
    let deletUrl=SpringURL+"shop/delete?num="+num;

    

    const navi=useNavigate();

    const onDataReceive=()=>{
        axios.get(detailUrl)
        .then(res=>{
            console.log(res.data.sangpum)
            setData(res.data);
        })

    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
     
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deletepath =()=>{
        axios.delete(deletUrl)
        .then(def=>{
            handleClose();
            navi("/shop/list");
        })
       

  
    };
    //처음 랜더링시 위의 함수 호출

    useEffect(()=>{
        onDataReceive();
    },[]);





    return (
        <div >
    <Card sx={{ maxWidth: 350,marginLeft: "400px",height: "fit-content"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="fit-content"
        height="fit-content"
        image={photoUrl+data.photo}
      >
      </CardMedia>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <b style={{fontSize:"50px"}}> {data.sangpum}</b> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
           <b style={{fontSize:"30px"}}> 수량 :{data.su} </b> <br/>
           <b style={{fontSize:"30px"}}> 단가 :{data.dan}원 </b> 

        </Typography>
      </CardContent>


     <CardActions>
     <IconButton aria-label="add to favorites" style={{color:"red"}}>
          <FavoriteIcon />
     </IconButton>
        <Button size="small" style={{marginLeft:"70px" ,color:"black", border:"2px solid black", borderRadius:"100px"}} 
        onClick={()=>{
            navi("/shop/list")
        }}>목록</Button>
        <Button size="small" style={{color:"black", border:"2px solid black", borderRadius:"100px"}}
        onClick={()=>{
            navi(`/shop/updateform/${num}`)
        }}>수정</Button>
        <Button size="small" style={{color:"black", border:"2px solid black", borderRadius:"100px"}}
         onClick={()=>{
            handleClickOpen()
         }}>삭제</Button>
      </CardActions>
    </Card>


    <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"상품 삭제 확인"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           상품을 삭제하려면 [확인] 버튼을 눌러주세요
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor:"yellow",color:
        "black",fontWeight:"bold"}}>취소</Button>
          <Button onClick={ deletepath}  style={{backgroundColor:"yellow",color:
        "black",fontWeight:"bold"}}  autoFocus>확인</Button>
        </DialogActions>
      </Dialog>
        </div>

    )
}

export default ShopDetail;
