import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Login.css';




//usetstate함수는 객체 형태를 받아야한다.
const Login = () => {
    
    //axios 사용해서 id랑 비밀번호 넘기셈
    //시큐리티 사용할거니까 id만 보내면 될 듯
    return (
        <div class="main-container">
            <div class="main-wrap">
                <section class="login-input-section-wrap">

                    <div class="login-input-wrap">
                        <input placeholder="아이디" type="text"></input>
                    </div>
                    <div class="login-input-wrap password-wrap">
                        <input placeholder="비밀번호" type="password"></input>
                    </div>

  
                    <div class="login-stay-sign-in">
                        <i class="far fa-check-circle"></i>
                        <span>로그인 유지</span>
                    </div>
                </section>
                <section class="Easy-sgin-in-wrap">
                    
                    <Stack spacing={2} direction="row">
                        <Button variant="text">로그인</Button>
                        <Button variant="co ntained">간편로그인</Button>
                        <Button variant="outlined">회원가입</Button>
                    </Stack>
                    <ul class="sign-button-list">
                        <div class="kakao button"><li><button><i class="kakao"></i><span>카카오톡</span></button></li></div>
                        <div class="Facebook button"><li><button><i class="facebook"></i><span>Facebook</span></button></li></div>
                        <div class=" button"><li><button><i class="google"></i><span>구글</span></button></li></div>
                    </ul>
                    <p class="forget-msg">아이디 또는 비밀번호를 잊으셨나요? | 회원가입</p>
                </section>
            </div>
        </div>
    )
}

export default Login;