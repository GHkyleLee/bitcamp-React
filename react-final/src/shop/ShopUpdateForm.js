import React, { useEffect, useState } from "react";
import '../App.css';
import axios from "axios";
import infoimg from '../image/R.png';
import { useParams,useNavigate } from "react-router-dom";

const ShopUpdateForm=()=>{
    const {num}=useParams();
    const [data,setData]=useState('');

    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState ('');
    const [dan,setDan]=useState('');

    const navi=useNavigate();

    //url 등록
    let uploadUrl="http://localhost:9001/shop/upload";
    let photoUrl="http://localhost:9001/save/";
    let detailUrl="http://localhost:9001/shop/detail?num="+num;
    let updateUrl="http://localhost:9001/shop/update";

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
    const onDataReceive=()=>{
        axios.get(detailUrl)
        .then(res=>{
            console.log(res.photo)
            setSangpum(res.data.sangpum);
            setSu(res.data.su);
            setDan(res.data.dan);
            setPhoto(res.data.photo);
        })

    };

    useEffect(()=>{
        onDataReceive();
    },[]);

    //추가하는 함수 이벤트
    const onUpdate=()=>{
            axios.post(updateUrl,{num,sangpum,su,dan})
            .then(res=>{
                //insert 성공후 처리할 코드들

                //목록으로 이동
                navi(`/shop/detail/${num}`);
            }).catch(err=>{
                alert(err);
            })

        
    }

    return (
        <div >
 <table className="table table-bordered" style={{width:'850px',fontSize:'20px',height:'600px'}}>
                <caption><b>상품 업데이트</b></caption>
                <tbody>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>상품명</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={sangpum} style={{width:'350px',height:'25px',marginLeft:"15px"}}
                            onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>사진</th>
                        <td width='300'>
                            <input type='file' defaultValue={photo} className="form-control" style={{width:'250px',height:'25px',marginLeft:"15px"}}
                            onChange={uploadImage}/>
                        </td>
                        <th>{photo}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>수량</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={su} style={{width:'120px',height:'25px',marginLeft:"15px"}}
                            onChange={(e)=>{
                                setSu(e.target.value);
                                }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th width='100' style={{backgroundColor:'#fbdea2',borderRadius:'100px',height:'40px'}}>단가</th>
                        <td width='300'>
                            <input type='text' className="form-control" defaultValue={dan} style={{width:'120px',height:'25px',marginLeft:"15px"}}
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
                            <b style={{cursor:'pointer'}} onClick={onUpdate}><img src={infoimg} alt="" style={{width:"50px",marginLeft:'5px'}} /><br/>수정완료 </b>                      
                            {/* <button type="button" className="btn btn-success" style={{width:'100px',height:'20px',marginLeft:'30px',borderRadius:'50px',cursor:'pointer'}}>상품등록</button> */}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default ShopUpdateForm;
