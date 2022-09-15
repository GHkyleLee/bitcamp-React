import React, { useState } from "react";
import '../App.css';
import axios from "axios";
import infoimg from '../image/R.png';
import { useNavigate } from "react-router-dom";

const ShopForm=()=>{

    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');

    const navi=useNavigate();

    //url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";
    let insertUrl="http://localhost:9001/shop/insert";

    //file change 시 호출 이벤트
    const uploadImage=(e)=>{
        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);
        axios({
            method:'post',
            url:uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data);//백엔드에서 보낸 변경된 이미지명을 photo 변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

    //추가하는 함수 이벤트
    const onInsert=()=>{
            axios.post(insertUrl,{sangpum,su,dan})
            .then(res=>{
                //insert 성공후 처리할 코드들

                //목록으로 이동
                navi("/shop/list");
            })

        
    }

    return (
        <div >
 <table className="table table-bordered" style={{width:'850px',fontSize:'20px',height:'600px'}}>
                <caption><b>상품 등록</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'350px',height:'25px',marginLeft:"15px"}}
                            onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>사진</th>
                        <td width='300'>
                            <input type='file' className="form-control" style={{width:'250px',height:'25px',marginLeft:"15px"}}
                            onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>수량</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'120px',height:'25px',marginLeft:"15px"}}
                            onChange={(e)=>{
                                setSu(e.target.value);
                                }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>단가</th>
                        <td width='300'>
                            <input type='text' className="form-control" style={{width:'120px',height:'25px',marginLeft:"15px"}}
                               onChange={(e)=>{
                                    setDan(e.target.value);
                                }}/>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr style={{height:'150px'}}>
                        <td colSpan='2'>
                            <img src={photoUrl+photo} alt="" style={{width:'300px',height:'300px',marginLeft:"15px"}}/>
                        </td>
                        <td>
                            <b style={{cursor:'pointer'}} onClick={onInsert}><img src={infoimg} alt="" style={{width:"50px",marginLeft:'5px'}} /><br/>상품등록</b>                      
                            {/* <button type="button" className="btn btn-success" style={{width:'100px',height:'20px',marginLeft:'30px',borderRadius:'50px',cursor:'pointer'}}>상품등록</button> */}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default ShopForm;
