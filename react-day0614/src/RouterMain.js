import React from "react";
import {Route,Routes} from "react-router-dom";
import {Home,About} from './pages';  //자동으로 pages 의 index.js 가 import됨
import Menu from "./components/Menu";
import './App.css';
import Food from "./pages/Food";

const RouterMain=()=>{

    return(
        <div>

            {/* 모든 홈페이지 공통으로 포함되는 컴포넌트나 이미지*/}
            <div className="nav1">
            <h1>React Router 공부하기</h1>
           <Menu/>
           </div>
           <img src={`${process.env.PUBLIC_URL}/image/R.jpg`} alt="" className="main_photo"/>
           <hr className="line"/>
           <div className="main_comp">
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/about/:name" element={<About/>}/>
                <Route path="/food/:food1/:food2" element={<Food/>}/>
                <Route path="/login/*" element={
                <div>
                   <h1> 로그인 기능은 아직 구현전입니다.</h1>
                   <img alt="" src='../image/1.jpg'/> 
                   <h3> 이거 드시고 오세요!!</h3>
                </div>
                }/>

                {/*그 이외의 매핑주소일 경우*/}
                <Route path="*" element={
                        <h1> 잘못된 주소입니다.</h1>
                }/>
           </Routes>
           </div>
        </div>
    )
}

export default RouterMain;