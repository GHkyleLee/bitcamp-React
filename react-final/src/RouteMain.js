import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
import {About,Info,Main,Menu,Title,Header} from './components';
import Board from './board/Board';
import {Shop,ShopDetail,ShopForm,ShopRowitem} from './shop';
import Member from './member/Member';
import ShopUpdateForm from "./shop/ShopUpdateForm";
import Memo from "./memo/Memo";
import UserReg from "./member/UserReg";
import LoginFrom from "./login/LoginForm";
import MemberList from "./member/MemberList";
import BoardForm from "./board/BoardForm";

const RouteMain=()=>{

    return (
        <div>
            <div className="header"> <Header/> </div>
            {/* <div className="title"> <Title/> </div> */}
            <div className="all">
            <div className="info"> <Info/> </div>
            <div className="menu"> <Menu/> </div>
            </div>
            <div className="main">
                <Routes>
                <Route path="/" element={<Main/>}/> 
                {/* Shop */}
                <Route path="/shop/list" element={<Shop/>}/> 
                <Route path="/shop/form" element={<ShopForm/>}/> 
                <Route path="/shop/detail/:num" element={<ShopDetail/>}/> 
                <Route path="/shop/updateform/:num" element={<ShopUpdateForm/>}/>
                <Route path="/loginform" element={<LoginFrom/>}/>

                <Route path="/memo" element={<Memo/>}/>

                <Route path="/member/list" element={<MemberList/>}/>
                <Route path="/board/list/:currentPage" element={<Board/>}/> 
                <Route path="/board/form" element={<BoardForm/>}/>
                <Route path="/member/form2" element={<Member/>}/> 
                <Route path="/member/form" element={<UserReg/>}/> 
                <Route path="/about" element={<About/>}/> 

                <Route path="*" element={
                    <div>
                        
                        <h1> 잘못된 URL 입니다.</h1>
                    </div>
                }/>


                </Routes>
            </div>

        </div>

    )
}

export default RouteMain;
