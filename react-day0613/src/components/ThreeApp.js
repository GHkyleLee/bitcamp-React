import React, { useState } from "react";
import '../App.css';
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ThreeApp =()=>{

    const [borads,setBorads]=useState([
        {
            no:1,
            writer:'이미자',
            subject:'hello',
            photo:'s1'
        },
        {
            no:2,
            writer:'박미자',
            subject:'하이루',
            photo:'s2'
        },
        {
            no:3,
            writer:'하하',
            subject:'밥먹고 하시죠?',
            photo:'s3'
        },
        {
            no:4,
            writer:'권능',
            subject:'갓능이라누?',
            photo:'s4'
        },
        {
            no:5,
            writer:'이기민',
            subject:'오늘은 비대면하겠습니다!',
            photo:'s5'
        },
    ])


    return(
        <div>
        <Alert severity="error">ThreeApp 컴포넌트</Alert>
        <TableContainer component={Paper}>
      <Table style={{width:'650px'}} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'#ddd'}}>
            <TableCell style={{width:'60px'}}>번호</TableCell>
            <TableCell style={{width:'100px'}} align="right">사진</TableCell>
            <TableCell style={{width:'300px'}} align="right">제목</TableCell>
            <TableCell style={{width:'100px'}} align="right">작성자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {borads.map((borads) => (
            <TableRow>
            <TableCell component="th" scope="borads">
                {borads.no}
              </TableCell>
              <TableCell  align="right">
                <img src={`../image/${borads.photo}.JPG`} style={{width:'60px'}}/>
              </TableCell>
              <TableCell align="right">{borads.subject}</TableCell>
              <TableCell align="right">{borads.writer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default ThreeApp;
