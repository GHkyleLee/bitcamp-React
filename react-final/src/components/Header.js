import React, { useEffect, useState } from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import {NavLink, useNavigate} from 'react-router-dom';
import infoimg from '../image/R.png';
import axios from "axios";

const Header = (props) => {
  const navi=useNavigate();

  let id=localStorage.user_id;

  const [name,setName]=useState('rlalsl');
  const url=process.env.REACT_APP_SPRING_URL+"member/getname?id="+id;
  const initFunc=()=>{
   
    axios.get(url)
    .then(res=>{
      setName(res.data);
    })
  }


  useEffect(()=>{
    initFunc();
  },[]) //처음 렌더링시 한번만 호출

  return (
    <React.Fragment>
      <div
        style={{
          position: "sticky",
          top: "0px",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        
        <Grid is_flex padding="10px 0px" width="1200px" margin="auto">
          <Grid is_start maxwidth="880px">
            <NavLink to="/">
            <Image
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
            ></Image>
            </NavLink>
            <InputWrap>
           
              <Grid is_flex>
                <Input placeholder="동네 이름, 물품명 등을 검색해보세요!"></Input>
                <img
                  style={{ marginRight: "1px" }}
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                ></img>
              </Grid>
            </InputWrap>
          </Grid>

         { 
         window.localStorage.getItem("user_id")===null?
         <div>
         <Button
            onClick={() => {
              navi("/loginform")
            }}
          >
            로그인
          </Button>
          <NavLink to="/member/form">
          <Button>
            회원가입
          </Button>
          </NavLink> </div>
          :
          <span>
          <img src={infoimg} alt="" width="40"/> <b> {name}님 (ID:{localStorage.user_id}) </b>
                
                 <Button onClick={()=>{
                  localStorage.removeItem("user_id");
                  window.location.reload();                  
                 }}>
                   Logout
                 </Button>
            
                 </span>
          }
         
        </Grid>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 200px;
`;

const Input = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 340px;
  font-size: 16px;
  font-weight: 500;
  margin: auto;
  -webkit-appearance: none;
  margin-top: 3px;
  background-color: transparent;
`;

const Image = styled.img`
  width: 120px;
`;


const Button = styled.button`
  width: 140px;
  border-radius: 5px;
  border: solid 1px #ffdcc5;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #666666;
  cursor: pointer;
`;
