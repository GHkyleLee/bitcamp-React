/* eslint-disable eqeqeq */
import React,{useState} from "react";
import '../App.css';
import Alert from '@mui/material/Alert';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';


const FourApp=()=>{
    const foodname=['순두부라면','한라봉스무디','스팸계란볶음밥','알짜배기연근','큐브스테이크'];
    
    const [food,setFood]=useState('순두부라면')
    const foodlist=foodname.map((name)=>(
    <option value={name} >{name}</option>
    ));

    function MyFormHelperText() {
        const { focused } = useFormControl() || {};
      
        const helperText = React.useMemo(() => {
          if (focused) {
            return '내용을 입력하세요';
          }
      
          return '내용을 입력하세요';
        }, [focused]);
      
        return <FormHelperText>{helperText}</FormHelperText>;
      }

      const [message,setMessage]=useState("오늘은 즐거운 금요일입니다...비가 올거 같네요. 다들 오늘 하루 잘 보냈나요???");

    return (
        <div>
            <Alert severity="success" style={{fontSize:'20px'}}>FourApp 컴포넌트 연습</Alert>

            <br/>
            <hr/>
            <div style={{marginLeft:"15px"}}>
                
        <Card sx={{ maxWidth: 345 }} style={{border:'3px solid black', borderRadius:'20px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            음식
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={food}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="350"
        image={`../image/${food}.jpg`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {message} 
          
        </Typography>
      </CardContent>
      <hr style={{backgroundColor:'black', border:'none', height: '4px'}}/>  
        <IconButton aria-label="add to favorites" style={{color:'red'}}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"style={{color:'skyblue'}}>
          <ShareIcon />
        </IconButton>
        </Card>

     
              <FormControl fullWidth style={{width:'150px', border:'4px solid black', borderRadius:'5px 80px 10px 10px ', marginTop:"10px",backgroundColor:'yellow', color:"black"}}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{border:'2px solid gray',borderRadius:'80px', backgroundColor:'yellow', color:"black"}}>
                사진선택
              </InputLabel>
              <br/>
              <NativeSelect
                style={{color: 'black',fontWeight:'bold'}} 
                defaultValue={30}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                  
                }}
                onChange={(e)=>{
                    setFood(e.target.value)
                }}
              >
            {foodlist}
              </NativeSelect>
            </FormControl>
            &nbsp;&nbsp;
        &nbsp;&nbsp;

    <FormControl sx={{ width: '25ch' }}         defaultValue={message}     
        onKeyUp={(e)=>{
            if(e.key==='Enter'){ 
                setMessage(e.target.value);               
            }
        }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
    </FormControl>
        </div>
        </div>
    )
}

export default FourApp;