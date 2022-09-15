import React,{ useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const UserReg = () => {
    const [data, setData] = useState({
        id : '',
        name : '',
        pass : '',
        email : '',
        hp : '',
        addr : ''
    })

    const [passOk, setPassOk] = useState(false);
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [btnOk, setBtnOk] = useState(false);

    //submit 시 호출될 함수
    const onSave = (e) => {
        e.preventDefault(); //기본이벤트 무효화
        //이메일 합치기
        setData({
            ...data,
            email:`${email1}@${email2}`
        })
        console.dir(data);

        if(!btnOk) {
            alert('아이디 중복체크를 해주세요');
            return;
        }

        if(!passOk) {
            alert("비밀번호 확인을 해주세요");
            return;
        }

        setTimeout(()=>{
            const url=process.env.REACT_APP_SPRING_URL+"member/insert";
            axios.post(url,data)
            .then(res=>{
                alert("insert 성공");
            });
        },2500)//2초후에 실행
    }

    //data 관련 데이타 입력시 호출
    const onDataChange = (e) => {
        const {name, value} = e.target;
        //이벤트 발생 name이 pass일 경우 무조건 passOk는 false
        if(name==='pass')
            setPassOk(false);
        setData({
            ...data,
            [name] : value
        })
    }

    //이메일 select 변경시 호출
    const onEmailChange = (e) => {
        const {value} = e.target;
        if(value==='-')
            setEmail2('');
        else
            setEmail2(value);
    }

    //2번째 pass 입력시 호출
    const onPassChange = (e) => {
        const {value} = e.target;
        if(value === data.pass)
            setPassOk(true);
        else
            setPassOk(false);
    }

    const btnIdChk = ()=>{
        const url=process.env.REACT_APP_SPRING_URL+"member/idcheck?id="+data.id;
        axios.get(url)
        .then(res=>{
            console.log(res.data);
                        if(res.data===0){
                setBtnOk(true)
                alert("가입 가능한 아이디입니다.")
            }else{
                setBtnOk(false)
                alert("이미 가입되어있는 아이디입니다.")
                
            }
        })
    }

    return (
        <div>
            <form className="form-inline" onSubmit={onSave}>
            <table className="table table-bordered" style={{width:'500px'}}>
                <caption><h3><b>회원가입</b></h3></caption>
                <tbody>
                    <tr>
                        <th width='100'>아이디</th>
                        <td>
                            <input type='text' className="form-control" onChange={onDataChange}
                            style={{width:'130px'}} name="id" required defaultValue={data.id}/>
                            <button type="button" className="btn btn-danger btn-sm"
                            style={{marginLeft:'5px'}} onClick={btnIdChk}>
                                중복체크
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>이름</th>
                        <td>
                            <input type='text' className="form-control" onChange={onDataChange}
                            style={{width:'130px'}} name="name" required/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>비밀번호</th>
                        <td>
                            <input type='password' className="form-control" onChange={onDataChange}
                            style={{width:'100px'}} name="pass" required/> 

                            <input type='password' className="form-control" onChange={onPassChange}
                            style={{width:'100px',marginLeft:'5px'}} required/>

                            <span style={{marginLeft:'5px',color:'red'}}>{passOk?'ok':''}</span>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>이메일</th>
                        <td>
                            <input type='text' className="form-control"
                            style={{width:'100px'}} required onChange={(e) => {
                                setEmail1(e.target.value);
                            }}/> 
                            <b>&nbsp;@&nbsp;</b>
                            <input type='text' className="form-control" defaultValue={email2}
                            style={{width:'130px'}} required onChange={(e) => {
                                setEmail2(e.target.value);
                            }}/>
                            &nbsp;&nbsp;
                            <select className="form-control" onChange={onEmailChange}>
                                <option value='-' defaultChecked>직접입력</option>
                                <option value='naver.com'>네이버</option>
                                <option value='nate.com'>네이트</option>
                                <option value='gmail.com'>구글</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>핸드폰</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'180px'}} 
                            name='hp' required onChange={onDataChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th width='100'>주소</th>
                        <td>
                            <input type='text' className="form-control" style={{width:'350px'}} 
                            name='addr' required onChange={onDataChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-info">가입하기</button>
                            <button type="button" className="btn btn-warning"
                            style={{marginLeft:'5px'}}>회원명단</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default UserReg;