import React, { useEffect, useState } from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';
import infoimg from '../image/R.png';
import axios from "axios";
import ShopRowItem from './ShopRowitem';



const Shop=()=>{
    const navi=useNavigate();
    // 백엔드에서 받아올 리스트 데이타 변수
    const [shopList,setShopList]=useState([]);
    //데이타 가져오는 함수
    const list=()=>{
        let url="http://localhost:9001/shop/list";

        axios.get(url)
        .then(res=>{
            //스프링으로부터 받아온 List 를 shopList 에 넣기
            setShopList(res.data);
            console.log("len="+res.data.length);
        })

    }

    //처음 렌더링시 딱 한번 데이타 가져오기
    useEffect(()=>{
        //console.log("list");
        list();
    },[]);

    return (
        <div>
   
            <div style={{width:'1200px'}}>
                {
                    shopList.map((row,idx)=>(
                    <ShopRowItem key={idx} idx={idx} row={row}/>
                    ))
                }
            </div>
            <br/><br/>
            <div style={{textAlign:"center"}}>
            <b style={{cursor:'pointer'}}onClick={()=>{
                navi("/shop/form") //상품 폼 페이지로 이동
            }}><img src={infoimg} alt="" style={{width:'100px'}} /><br></br>상품등록 </b>
            </div>
        </div>

    )
}

export default Shop;
