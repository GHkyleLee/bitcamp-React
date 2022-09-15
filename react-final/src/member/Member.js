import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./../Member.css";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { padding } from "@mui/system";




const Member = () => {

    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const password = useRef();
    const [btnOk, setBtnOk] = useState(false);
    const email2 = useRef();
    password.current = watch("password");
    console.log(watch('email'))

    const [data, setData] = useState({
        id : '',
        name : '',
        pass : '',
        email : '',
        hp : '',
        addr : ''
    })



    const onSubmit = data => {
        // 기본으로 data 가져오기
        console.log("데이타"+data);
        if (!btnOk) {
            alert('아이디 중복체크를 해주세요');
            return;
        }
    }
    
    const onEmailChange = (e) => {
        const {value} = e.target;
        if(value==='-')
            email2.useRef('');
        else
        email2.useRef(value);
    }





    return (

        <form
            onSubmit={handleSubmit({onSubmit})}
        >
            <hr></hr>
            <div style={{ textAlign: "center", fontSize: "35px" }}>
                <b> 회원가입</b>
            </div>
            <hr />



            <label className="accountLabel">아이디</label>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 350 }}>
                <input className="reginput"  {...register('id', {
                    required: true,

                    pattern: {
                        value: /^[a-z]+[a-z0-9]/g
                    },
                    maxLength: {
                        value: 20

                    },
                    minLength: {
                        value: 5
                    }
                })}
                />
            </FormControl>
            <FormControl variant="filled" sx={{ m:3.2, minWidth: 50, marginTop:"50px" }}>
                <button type="button" className="btn btn-danger btn-sm"
                    style={{marginTop:"3px",padding:"5px",float:"left"}}>
                    중복체크
                </button>
            </FormControl>
            {errors.id && errors.id.type === "required" && <p className="chkMessage">아이디를 입력해주세요.</p>}
            {errors.id && errors.id.type === "pattern" && <p className="chkMessage">"아이디는 영문으로 시작하는 5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다."</p>}
            {errors.id && errors.id.type === "minLength" && <p className="chkMessage">"아이디는 영문으로 시작하는 5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다."</p>}
            {errors.id && errors.id.type === "maxLength" && <p className="chkMessage">"아이디는 영문으로 시작하는 5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다."</p>}




            <label className="accountLabel">이름</label>
            <input className="reginput"
                {...register('name',
                    {
                        required: "이름을 입력해주세요",
                        maxLength: {
                            value: 10,
                            message: "이름은 열자 이내로입력해주세요"
                        }
                    })}
            />
            {errors.name && <p className="chkMessage">{errors.name.message}</p>}

            <label className="accountLabel">비밀번호</label>
            <input name="password" type="password" className="reginput"
                {...register('password', {
                    required: "비밀번호를 입력해주세요",
                    minLength: {
                        value: 8,
                        message: "8자 이상의 비밀번호만 사용 가능합니다."
                    },
                    maxLength: {
                        value: 16,
                        message: "16자 이하의 비밀번호만 사용 가능합니다."
                    },
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                        message: "영문, 숫자를 혼용하여 입력해주세요..",
                    }
                })}
            />
            {errors.pass && <p className="chkMessage">{errors.pass.message}</p>}

            <label className="accountLabel">비밀번호 확인</label>
            <input name="password_confirm" type="password" className="reginput"
                {...register('password_confirm', {
                    required: "비밀번호를 입력해주세요",
                    validate: (value) =>
                        value === password.current

                })}
            />
            {errors.password_confirm && errors.password_confirm.type === "validate" && <p className="chkMessage">비밀번호가 일치하지 않습니다.</p>}

            <label className="accountLabel">Email</label>
            <input className="reginput"  {...register('email', {
                required: "이메일을 입력해주세요",
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "이메일 형식에 맞게 입력해주세요"
                }
            })}
            />
            {errors.email && <p className="chkMessage">{errors.email.message}</p>}

            <label className="accountLabel">핸드폰 번호</label>

            <FormControl variant="filled" sx={{ m: 0, minWidth: 30 }}>
                <input name="phone1" type="text" className="phoneinput" 
                {...register('phone1', {
                    required: true,
                    maxLength: {
                        value: 5

                    },
                    minLength: {
                        value: 4
                    }
                })}
                />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 2.6, minWidth: 30 }}>
                -
            </FormControl>
            <FormControl variant="filled" sx={{ m: 0, minWidth: 30 }}>
                <input name="phone2" type="text" className="phoneinput"
                />

            </FormControl>
            <FormControl variant="filled" sx={{ m: 2.6, minWidth: 30 }}>
                -
            </FormControl>
            <FormControl variant="filled" sx={{ m: 0, minWidth: 30 }}>
                <input name="phone3" type="text" className="phoneinput"
                />
            </FormControl>

            {/* /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i */}
            {errors.phone && errors.phone.type === "validate" && <p className="chkMessage">핸드폰 번호가 올바르지 않습니다..</p>}


            <label className="accountLabel">이메일</label>

            <FormControl variant="filled" sx={{ m: 0, minWidth: 30 }}>
                <input name="email1" type="text" className="emailinput" style={{width:"80px"}}
                />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 2.6, minWidth: 30 }}>
                @
            </FormControl>
            <FormControl variant="filled" sx={{ m: 0, minWidth: 150 }} >
                <input name="email2" type="text" className="emailinput" style={{width:"120px"}}
                onChange={onEmailChange}
                />

            </FormControl>
            <FormControl variant="filled" sx={{ m: 2.6, minWidth: 30 }}>
                -
            </FormControl>
            <FormControl variant="filled" sx={{ m: 0, minWidth: 30 }}>
            <select style={{marginTop:"5px",padding:"18px"}}>
                                <option value='-' defaultChecked>직접입력</option>
                                <option value='naver.com'>네이버</option>
                                <option value='nate.com'>네이트</option>
                                <option value='gmail.com'>구글</option>
                            </select>
            </FormControl>
            <div style={{ marginLeft: "90px" }}> <button type="submit" className="reginput">회원가입</button></div>
        </form>

    )
}

export default Member;