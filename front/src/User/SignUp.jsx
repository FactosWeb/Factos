import React from 'react';
import axios from "axios";
import * as Yup from "yup";
import {toast, ToastContainer} from "react-toastify";
import {Formik, ErrorMessage} from "formik";
import {Form, Input, Button} from 'antd'


const SignUp = (props: any) => {

    const validationSchema = Yup.object().shape({
        user_Email: Yup
            .string()
            .email("올바른 이메일 형식이 아닙니다!")
            .required("이메일을 입력하세요!"),
        user_Id: Yup
            .string()
            .required("아이디를 입력하세요!"),
        user_Nickname: Yup
            .string()
            .required("이름을 입력하세요!"),
        user_Password: Yup
            .string()
            .required("패스워드를 입력하세요!"),
        password2: Yup
            .string()
            .oneOf([Yup.ref('user_Password'), null],
                '비밀번호가 일치하지 않습니다')
            .required("필수 입력 값입니다!")
    })

    const submit = async (values: any) => {
        console.log(values);
        const form = new FormData();
        const {user_Id, user_Email, user_Password, user_Seq, user_Nickname} = values;
        form.append('user_Id', user_Id);
        form.append('user_Nickname', user_Nickname);
        form.append('user_Password', user_Password);
        form.append('user_Email', user_Email);

        try {
            await axios({
                header: {
                    'Content-type': 'application/json'
                },
                url: '/signUpUser',
                method: 'post',
                data: form,
            });
            alert('회원등록 완료하였습니다. 로그인 하세요', {
                position: "top-center",
            });

        } catch (e) {
            alert('실패하였습니다. 다시 시도하세요', {
                position: "top-center",
            });
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
            }}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            {({values, handleSubmit, handleChange}) => (
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
                        <Form.Item className="input-form" label="이메일">
                            <Input value={values.user_Email} name="user_Email" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Email"/>
                            </div>
                        </Form.Item>
                        <Form.Item className="input-form" label="이름">
                            <Input value={values.user_Nickname} name="user_Nickname" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="user_Nickname"/>
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
                        <Form.Item className="input-form" label="비밀번호 확인">
                            <Input.Password value={values.password2} name="password2" onChange={handleChange}/>
                            <div className="error-message">
                                <ErrorMessage name="password2"/>
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