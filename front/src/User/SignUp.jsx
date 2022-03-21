import React, {Component, useState} from 'react';
import axios from "axios";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button, Checkbox} from 'antd'

const axiosApi = (values: any, values2: any, values3: any) => {
    axios({
        header: {
            'Content-type': 'application/json'
        },
        data: values,
        url: values2,
        method: values3,
    });
}

const SignUp = (props: any) => {
    const idRegExp = /^[a-zA-z0-9]$/;
    const phoneRegEXp = /^[0-9]&/;
    const validationSchema = Yup.object().shape({

        user_Email: Yup
            .string()
            .email("올바른 이메일 형식이 아닙니다!")
            .required("이메일을 입력하세요!"),
        user_Id: Yup
            .string()
            // .matches(idRegExp, '아이디는 영문자로 시작해야하며 영문자 또는 숫자만 사용 가능합니다.')
            .min(4, '아이디는 8글자에서 20글자까지 가능합니다.')
            .max(20, '아이디는 8글자에서 20글자까지 가능합니다.')
            .required("아이디를 입력하세요!"),
        user_Nickname: Yup
            .string()
            .required("이름을 입력하세요!"),
        // user_Phone_No: Yup
        //     .string()
        // .matches(phoneRegEXp, '휴대폰 번호는 숫자로 이루어져야합니다.')
        // .require("휴대폰 번호를 입력하세요"),
        user_Password: Yup
            .string()
            .required("패스워드를 입력하세요!"),
        password2: Yup
            .string()
            .oneOf([Yup.ref('user_Password'), null],
                '비밀번호가 일치하지 않습니다')
            .required("필수 입력 값입니다!")
    })
    const UserIdCheckUP = async (values: any) => {
        const form = new FormData();
        const {user_Id} = values;
        form.append('user_Id', user_Id);
        try {
            axiosApi(form, '/userIdCheck', 'get');
            if (form.get(user_Id))
                form.alert('아이디가 중복되었습니다.', {
                    position: "top-center",
                });
        } catch (e) {
            alert('사용할 수 있는 아이디입니다.', {
                position: "top-center",
            });
        }
    }

    const submit = async (values: any) => {
        console.log(values);
        const form = new FormData();
        const {
            user_Id,
            user_Email,
            user_Password,
            user_Nickname,
            user_Name,
            user_Phone_No,
            user_Status_Cd,
            user_Access_Cd,
            user_Marketing_Agree
        } = values;
        form.append('user_Id', user_Id);
        form.append('user_Nickname', user_Nickname);
        form.append('user_Password', user_Password);
        form.append('user_Email', user_Email);
        form.append('user_Phone_No', user_Phone_No);
        form.append('user_Name', user_Name);
        form.append('user_Access_Cd', user_Access_Cd);
        form.append('user_Status_Cd', user_Status_Cd);
        form.append('user_Marketing_Agree', user_Marketing_Agree);
        try {
            axiosApi(form, '/signUpUser', 'post');

            alert('회원등록 완료하였습니다. 로그인 하세요', {
                position: "top-center",
            });
        } catch (e) {
            alert('실패하였습니다. 다시 시도하세요', {
                position: "top-center",
            });
        }
    }

    class ResetForm extends Component {
        constructor(props) {
            super(props)
            this.myRef = React.createRef()
        }

        handleSubmit = (event) => {
            event.preventDefault()
            this.myRef.current.setState({initialValues: ''})
            event.target.reset()
        }
    }

    return (
        <Formik
            initialValues={{
                user_Id: "",
                user_Email: "",
                user_Nickname: "",
                user_Password: "",
                password2: "",
                user_Phone_No: "",
                user_Name: "",
                user_Access_Cd: "y",
                user_Status_Cd: "use",
                user_Marketing_Agree: 'y'

            }}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({values, handleReset, handleSubmit, handleChange}) => (
                <div className="signup-wrapper">
                    <ToastContainer/>
                    <Form
                        layout="vertical"
                        autoComplete="off"
                        onFinish={handleSubmit}
                    >
                        <Form.Item className="input-form" label="아이디">
                            <Input value={values.user_Id} name="user_Id" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Id"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="비밀번호">
                            <Input.Password value={values.user_Password} name="user_Password" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Password"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="비밀번호 확인">
                            <Input.Password value={values.password2} name="password2" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="password2"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="이메일">
                            <Input value={values.user_Email} name="user_Email" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Email"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="휴대폰 번호">
                            <Input value={values.user_Phone_No} name="user_Phone_No" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Phone_No"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="닉네임">
                            <Input value={values.user_Nickname} name="user_Nickname" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Nickname"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="이름">
                            <Input value={values.user_Name} name="user_Name" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Name"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="약관">
                            <input value={values.user_Marketing_Agree} name="user_Marketing_Agree"
                                   onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Marketing_Agree"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="약관">
                            <input value={values.user_Access_Cd} name="user_Access_Cd" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Access_Cd"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="약관">
                            <input value={values.user_Status_Cd} name="user_Status_Cd" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Status_Cd"/>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onChange={handleReset}>
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