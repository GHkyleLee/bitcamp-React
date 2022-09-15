import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import menu4 from '../image/R.png';

    const BoardForm=()=>{
        const[photo,setPhoto]=useState('');
        const[subject,setSubject]=useState('');
        const[content,setContent]=useState('');

        //url 선언
        let uploadUrl=process.env.REACT_APP_SPRING_URL+"board/upload";
        let insertUrl=process.env.REACT_APP_SPRING_URL+"board/insert";
        let photoUrl=process.env.REACT_APP_SPRING_URL+"save/";

        const navi=useNavigate();

        let id=localStorage.user_id;

        const initFunc=()=> {
            if(window.localStorage.getItem("user_id")==null){
                alert("먼저 로그인 후 글을 작성해주세요.");
                navi("/loginform");
            }
        }

        //이미지 업로드 이벤트
        const imageUpload=(e)=>{
            const uploadFile=e.target.files[0];
            const imageFile=new FormData();
            imageFile.append("uploadFile", uploadFile);

            axios({
                method:'post',
                url:uploadUrl,
                data:imageFile,
                headers:{'Content-Type':'multipart/form-data'}
            }).then(res=>{
                setPhoto(res.data);
            })
        }

        //submit 이벤트 등록 완료
        const onBoardInsert=(e)=>{
            e.preventDefault();

            axios.post(insertUrl,{id,photo,subject,content})
            .then(res=>{
                navi("/board/list/1")
            })
        }

            useEffect(()=>{
                initFunc();
                },[]);
            
        return(
            <div style={{width:'1000px'}}>
                <img src={photoUrl+photo} alt="" className="imgphoto"/>
                <form onSubmit={onBoardInsert}>
                    <table className="table table-bordered" style={{width:'400px'}}>
                        <tbody>
                            <tr>
                                <th style={{backgroundColor:'#ddd',width:'100px'}}>아이디</th>
                                <td><b>{id}</b></td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor:'#ddd',width:'100px'}}>대표이미지</th>
                                <td>
                                    <input type='file' className="form-control" style={{width:'300px'}} required
                                    onChange={imageUpload}/>
                                </td>
                            </tr>
                            <tr>
                                <th style={{backgroundColor:'#ddd',width:'100px'}}>제목</th>
                                <td>
                                    <input type='text' className="form-control" style={{width:'300px'}} required
                                    onChange={(e)=>{
                                        setSubject(e.target.value);
                                    }}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <textarea className="form-control" required
                                    style={{width:'400px',height:'120px'}}
                                    onChange={(e)=>{
                                        setContent(e.target.value);
                                    }}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center">
                                    <button type="submit" className="btn btn-primary">게시글 저장</button>
                                    <button type="button" className="btn btn-primary"
                                    style={{marginLeft:'10px'}}

                                    onClick={()=>{
                                        navi("/board/list/1")
                                    }}>게시글 메인</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
        )
    }
    
export default BoardForm;