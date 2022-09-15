import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';
import axios from "axios";
import MemberRowItem from './MemberRowItem';

const MemberList = () => {
    const navi = useNavigate();
    const [memberList, setMemberList] = useState([]);
    //url등록
    const SPRING_URL = process.env.REACT_APP_SPRING_URL;
    let listUrl = SPRING_URL + "member/list";
    
    const getList = () => {
        axios.get(listUrl)
        .then(res => {
            setMemberList(res.data);
            //console.dir(res.data);
        })
    }

    const dataDelete = (num) => {
        let deleteUrl = SPRING_URL + "member/delete?num=" + num;
        axios.delete(deleteUrl)
        .then(res => {
            getList(); //삭제 후 목록 다시 가져오기
        })
    }

    useEffect(() => {
        getList();
    },[]);

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>회원명</th>
                        <th>아이디</th>
                        <th>핸드폰</th>
                        <th>이메일</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memberList.map((row, idx) => (
                            <MemberRowItem row={row} key={row.num} i={idx} onDelete={dataDelete}/>
                        ))
                    }
                </tbody>
            </table>
            <button type="button" className='btn btn-info btn-lg' onClick={() => {
                navi(-1);
            }}>이전페이지</button>
        </div>
    );
};

export default MemberList;