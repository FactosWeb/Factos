import React, {useState, useEffect} from 'react';
import axios from "axios";
import data from "bootstrap/js/src/dom/data";

const form = new FormData();

const axiosApi = (values: form, values2: any, values3: any) => {

    axios({
        header: {
            'Content-type': 'application/json'
        },
        data  : form,
        url   : values2,
        method: values3,
    });
}

//usetstate함수는 객체 형태를 받아야한다.
const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        const data = {
            id : inputId,
            password : inputPw
        };
        axiosApi(data, '/user/login', 'GET');
        console.log('click login')
    }
    //axios 사용해서 id랑 비밀번호 넘기셈
    return (
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId}/>
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw}/>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;