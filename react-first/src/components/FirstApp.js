import React from "react";
import './MyStyle.css';
import img16 from '../image/16.jpg';
import img04 from '../image/04.png';
const FirstApp=()=>{
    //style 을 변수에 지정
    const styleImg1={
        width:"200px",
        border:'5px inset gray',
        marginLeft:'20px',
        marginTop:'20px'
    }
    const styleImg2={
        width:"200px",
        border:'5px inset gray',
        marginLeft:'20px',
        marginTop:'20px',
        borderRadius:'100px'
        
    }
return  (
    //반드시 하나의 태그로 감싸줘야한다.
    <div>
       <div className="black-nav"><h3 className="lines">리액트 시작</h3></div>
        <div className="ab"><h2>React Play!!!</h2></div>
        <div  className="mains" style={{fontSize:'40px',color:'silver',marginLeft:'100px',fontFamily:'Dongle'}}>
        Hello 안녕?
        </div>
        <img src={img16} style={styleImg1} alt=""/>
        {/*이미즐 넣은후 인라인 스타일로 너비, 테두리,테두리 둥글게 지정해보세요*/}
        <img src={img04} style={styleImg2} alt=""/>
        <h3>public 영역의 이미지는 직접 호출가능</h3>
        <img src="../s4.JPG" alt=""/>
    </div>
    )

}
export default FirstApp;