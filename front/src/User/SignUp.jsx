import React, {useEffect} from 'react';
import * as Yup from "yup";
import {ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button, Checkbox} from 'antd'
import axiosAPI from '../Common/CommonAxios';


const BeforeUnloadMethod = () => {
    const preventClose = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = ""; //Chrome에서 동작하도록;deprecated
    };
    useEffect(() => {
        (() => {
            window.addEventListener("beforeunload", preventClose);
        })();
        return () => {
            window.removeEventListener("beforeunload", preventClose);
        };
    }, []);
}

const SignUp = (props: any) => {
    const idRegExp = /^[a-zA-Z][a-zA-Z0-9]+$/; //첫 글자는 영문자로 시작해야하며 숫자를 포함할 수 있다.
    const phoneRegEXp = /^\d{2,3}-\d{3,4}-\d{4}$/;

    const validationSchema = Yup.object().shape({

        userEmail: Yup
            .string()
            .email("올바른 이메일 형식이 아닙니다!")
            .required("이메일을 입력하세요!"),
        userId: Yup
            .string()
            .matches(idRegExp, '아이디는 영문자로 시작해야하며 영문자 또는 숫자만 사용 가능합니다.')
            .min(4, '아이디는 4글자에서 20글자까지 가능합니다.')
            .max(20, '아이디는 4글자에서 20글자까지 가능합니다.')
            .required("아이디를 입력하세요!"),
        userNickname: Yup
            .string()
            .required("이름을 입력하세요!"),
        userPhoneNo: Yup
            .string()
            .matches(phoneRegEXp, '올바른 휴대폰 번호형식이 아닙니다.')
            .required("휴대폰 번호를 입력하세요"),
        userPassword: Yup
            .string()
            .required("패스워드를 입력하세요!"),
        password2: Yup
            .string()
            .oneOf([Yup.ref('userPassword'), null],
                '비밀번호가 일치하지 않습니다')
            .required("필수 입력 값입니다!")
    })


    const submit = async (values: any) => {
        const form = FormData();

        const {
            userId,
            userEmail,
            userPassword,
            userNickname,
            userName,
            userPhoneNo,
            userStatusCd,
            userAccessCd,
            userMarketingAgree
        } = values;

        form.append('userId', userId)
        form.append('userName', userName)
        form.append('userEmail', userEmail)
        form.append('userPassword', userPassword)
        form.append('userMarketingAgree', userMarketingAgree)
        form.append('userAccessCd', userAccessCd)
        form.append('userPhoneNo', userPhoneNo)
        form.append('userStatusCd', userStatusCd)
        form.append('userNickname', userNickname)

        await axiosAPI.post("/user/signUpUser", form).then(res => {
            if (res.data.result == 'OK') {
                console.log(res.data.data)
                alert('회원등록 완료하였습니다. 로그인 하세요', {
                    position: "top-center",
                })
            } else {
                alert('실패하였습니다. 다시 시도하세요', {
                    position: "top-center",
                });
            }
        });
    }

    return (
        BeforeUnloadMethod(),
            <Formik
                initialValues={{
                    userId: "",
                    userEmail: "",
                    userNickname: "",
                    userPassword: "",
                    password2: "",
                    userPhoneNo: "",
                    userName: "",
                    userAccessCd: "y",
                    userStatusCd: "use",
                    userMarketingAgree: 'y'

                }}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({values, handleReset, handleSubmit, handleChange, resetForm}) => (
                    <div className="signup-wrapper">
                        <ToastContainer/>
                        <Form redirect="/posts"
                              layout="vertical"
                              autoComplete="off"
                              onFinish={handleSubmit}
                        >
                            <Form.Item className="input-form" label="아이디">
                                <Input value={values.userId} name="userId" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userId"/>
                                </div>
                                <Form.Item>
                                    <Button type="primary" htmlType="UserIdCheckUP">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item className="input-form" label="비밀번호">
                                <Input.Password value={values.userPassword} name="userPassword"
                                                onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userPassword"/>
                                </div>
                            </Form.Item>
                            <Form.Item className="input-form" label="비밀번호 확인">
                                <Input.Password value={values.password2} name="password2" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="password2"/>
                                </div>
                            </Form.Item>
                            <Form.Item className="input-form" label="이메일">
                                <Input value={values.userEmail} name="userEmail" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userEmail"/>
                                </div>
                            </Form.Item>
                            <Form.Item className="input-form" label="휴대폰 번호">
                                <Input value={values.userPhoneNo} name="userPhoneNo" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userPhoneNo"/>
                                </div>
                            </Form.Item>
                            <Form.Item className="input-form" label="닉네임">
                                <Input value={values.userNickname} name="userNickname" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userNickname"/>
                                </div>
                            </Form.Item>
                            <Form.Item className="input-form" label="이름">
                                <Input value={values.userName} name="userName" onChange={handleChange}/>
                                <div className="error-message">
                                    <ErrorMessage name="userName"/>
                                </div>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </Formik>
    );
}
export default SignUp;