import React,{useState} from "react"; 
import "../App.css";
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";

const WriteForm=({onSave})=>{
    const [name,setName]=useState('');
    const [photo,setPhoto]=useState('s1');
    const [blood,setBlood]=useState('A');

    const addDataEvent=()=>{
        //부모 컴포넌트의 onSabe 호출
        onSave({name,photo,blood});
    };

    const photoChange = (e) => {
      setPhoto(e.target.value);
    };
    const bloodChange = (e) => {
      setBlood(e.target.value);
    };



    return(
        <div className="form-inline" style={{marginLeft:'100px'}}>
             <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <TextField
             label="이름입력"
             placeholder="이름을 입력하세요"
             style={{width:'100px'}}
             onChange={(e)=>{
                setName(e.target.value);
             }}>
            </TextField>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Blood</InputLabel>
            <Select
                value={blood}
                label="blood"
                onChange={bloodChange}
                >
                    <MenuItem value={'A'}>A형</MenuItem>
                    <MenuItem value={'B'}>B형</MenuItem>
                    <MenuItem value={'AB'}>AB형</MenuItem>
                    <MenuItem value={'O'}>O형</MenuItem>

            </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Photo</InputLabel>
            <Select
                value={photo}
                label="Photo"
                onChange={photoChange}
                >
                    {
                    [...new Array(10)].map((a,idx)=>(<MenuItem value={`s${idx+1}`}>{`s${idx+1}`}</MenuItem>))
                    }
                </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120, textAlign:'center'}} >
                <Button variant="contained" color="success" style={{backgroundColor:'red' ,fontWeight:'bold'}} onClick={addDataEvent}> 
                     추가
                    </Button>
                </FormControl>
        </div>
    )

}

export default WriteForm;