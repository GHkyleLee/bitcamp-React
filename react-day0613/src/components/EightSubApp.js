import React from "react";
import "../App.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const EightSubApp=({changeColor,chagePhoto,changeMessage,getColor,photo,getMessage})=>{

    return(
        <div>
            <br/>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 30 }}>
            <input type="color" style={{width:"100px", height:"40px"}} defaultValue={getColor} onChange={(color)=>{
                changeColor(color.target.value)}}/>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <input type="text" style={{height:'40px'}} defaultValue={getMessage}onChange={(e)=>{
                changeMessage(e.target.value)}}/>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Photo</InputLabel>
            <Select
                defaultValue={photo}
                label="Photo"
                onChange={(e)=>{chagePhoto(e.target.value)}}
                style={{height:'40px'}}
                >
                    {
                    [...new Array(10)].map((a,idx)=>(<MenuItem value={`s${idx+1}`}>{`s${idx+1}`}</MenuItem>))
                    }
                </Select>
                </FormControl>
        </div>
    )
}
export default EightSubApp