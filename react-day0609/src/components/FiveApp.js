import React, { useState } from "react";
import '../App.css';

const FiveApp=()=>{
    const [photo,setPhoto]=useState("../image2/c1.png");

    const changePhoto=(e)=>{
        setPhoto(e.target.value);
    }
    return(
        <div>
             <h3 className='alert alert-success'>FiveApp 입니다</h3>

            <div style={{fontSize:'20px'}}>
                <b> 인형선택:</b>
                &nbsp;&nbsp;
                <label>
                <input type="radio" name="photo" value='../image2/c1.png' defaultChecked onClick={changePhoto}/>인형1
                </label>   
                &nbsp;&nbsp;
                <label>    
                <input type="radio" name="photo" value='../image2/c2.png' onClick={changePhoto}/>인형2  
                </label>   
                &nbsp;&nbsp;       
                <label>   
                <input type="radio" name="photo" value='../image2/c3.png'onClick={changePhoto} />인형3 
                </label>
                &nbsp;&nbsp;           
                <label>  
                <input type="radio" name="photo" value='../image2/c4.png'onClick={changePhoto} />인형4
                </label>
                &nbsp;&nbsp;            
                <label>  
                <input type="radio" name="photo" value='../image2/c5.png' onClick={changePhoto} />인형5  
                </label> 
                &nbsp;&nbsp; 
                <label>        
                <input type="radio" name="photo" value='../image2/c6.png' onClick={changePhoto} />인형6
                </label> 
                &nbsp;&nbsp; 
                          
                <label> 
                <input type="radio" name="photo" value='../image2/c7.png' onClick={changePhoto} />인형7
                </label> 
                &nbsp;&nbsp; 
                <label>       
                <input type="radio" name="photo" value='../image2/c8.png'onClick={changePhoto} />인형8 
                &nbsp;&nbsp; 
                </label>    
                <br/>     
                <img alt="" src={photo}/>
            </div>
        </div>
    )
}

export default FiveApp;