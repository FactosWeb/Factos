import React, { useState } from 'react';
import axiosAPI from '../Common/CommonAxios';

function Login() {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onClickLogin = () => {
    console.log('click login')
    console.log('ID : ', inputId)
    console.log('PW : ', inputPw)
    axiosAPI.post('/user/login', {
      params: {
        userId: inputId,
        userPassword: inputPw,
        user_id : inputId,
        user_Password: inputPw
      }
      
    })
        .then(res => {
          console.log(res)
          console.log('res.data.userId :: ', res.data.userId)
          if(res.data.userId === undefined){
            alert('입력하신 id 가 일치하지 않습니다.')
          } else if(res.data.userPassword === null){
            alert('입력하신 비밀번호 가 일치하지 않습니다.')
          } else if(res.data.userId === inputId) {
            sessionStorage.setItem('userId', inputId)
          }
          document.location.href = '/'
        })
        .catch()
  }

  return(
      <div>
        <h2>Login</h2>
        <div>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
        </div>
        <div>
          <label htmlFor='input_pw'>PW : </label>
          <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
        </div>
        <div>
          <button type='button' onClick={onClickLogin}>Login</button>
        </div>
      </div>
  )
}

export default Login;