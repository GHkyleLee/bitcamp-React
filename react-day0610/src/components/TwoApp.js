import React from "react";
import '../App.css';
import Alert from '@mui/material/Alert';

import img1 from '../image2/s1.JPG';
import img2 from '../image2/s2.JPG';
import img3 from '../image2/s3.JPG';
import img4 from '../image2/s4.JPG';
import img5 from '../image2/s5.JPG';


const TwoApp=()=>{

    const imgArr=[img1,img2,img3,img4,img5];
    
    const pimgArr=['10','13','15','17','19'];

    return (
        <div>
             <Alert severity="warning" style={{fontSize:'20px'}}>TwoeApp 컴포넌트 연습</Alert>

            <hr/>
         <div style={{marginLeft:'50px'}}>
            <h5> src 의 이미지를 배열에 넣어 반복하기</h5>
            {
                imgArr.map((imgArr)=>(<img src={imgArr} alt=""/>))
            }
        </div>
        <hr style={{backgroundColor:'blue', border:'none',height: '5px'}}/>
        <div style={{marginLeft:'50px'}}>
            <h5> public의 이미지를 </h5>

            {
                pimgArr.map((pimg)=>(<img className="photo" src={`../image/${pimg}.jpg`} alt=""/>))
            }
        </div>
        </div>
    )
}

export default TwoApp;