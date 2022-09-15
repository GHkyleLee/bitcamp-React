import React, { useEffect, useState } from "react";
import '../App.css';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from "axios";

const MemoRowitem=({idx,row, total})=>{
    const SpringURL=process.env.REACT_APP_SPRING_URL;
    // 백엔드에서 받아올 리스트 데이타 변수
    const [memoList,setMemoList]=useState({});
    let deletUrl= SpringURL+"memo/delete?num="+row.num
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
            
        })

    };

    return (
        <div>  
<Card sx={{ minWidth: 275 }}>
 
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        게시글 번호: ({total-idx})  
        </Typography>
        <Typography variant="h5" component="div">
         NickName : {row.nickname} 
        </Typography>
        <Typography variant="h3" color="text.secondary">
        메모 : {row.message}
        </Typography>
        <Typography variant="body2">
         작성일 : {row.writeday}
        </Typography>
      </CardContent>
      <CardActions style={{float:"right"}}>
        <Button size="small" onClick={ handleClickOpen}> <DeleteOutlinedIcon style={{color:"red"}}  /></Button>
      </CardActions>
    </Card>
           <Dialog
           open={open}
           keepMounted
           onClose={handleClose}
           aria-describedby="alert-dialog-slide-description"
         >
           <DialogTitle>{"메모 삭제 확인"}</DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-slide-description">
              메모를 삭제하려면 [확인] 버튼을 눌러주세요
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

export default MemoRowitem;
