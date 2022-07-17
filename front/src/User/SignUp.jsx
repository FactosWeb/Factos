import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Box, Typography, TextField, InputLabel } from "@mui/material";
import axiosAPI from "../Common/CommonAxios";
import { Container, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});
const idRegExp = /^[a-zA-Z][a-zA-Z0-9]+$/; //첫 글자는 영문자로 시작해야하며 숫자를 포함할 수 있다.
const phoneRegEXp = /^\d{2,3}-\d{3,4}-\d{4}$/;
// const BeforeUnloadMethod = () => {
//   const preventClose = (e: BeforeUnloadEvent) => {
//     e.preventDefault();
//     e.returnValue = ""; //Chrome에서 동작하도록;deprecated
//   };
//   useEffect(() => {
//     (() => {
//       window.addEventListener("beforeunload", preventClose);
//     })();
//     return () => {
//       window.removeEventListener("beforeunload", preventClose);
//     };
//   }, []);
// };
const validationSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email("올바른 이메일 형식이 아닙니다!")
    .required("이메일을 입력하세요!"),
  userId: Yup.string()
    .matches(
      idRegExp,
      "아이디는 영문자로 시작해야하며 영문자 또는 숫자만 사용 가능합니다."
    )
    .min(4, "아이디는 4글자에서 20글자까지 가능합니다.")
    .max(20, "아이디는 4글자에서 20글자까지 가능합니다.")
    .required("아이디를 입력하세요!"),
  userNickname: Yup.string().required("이름을 입력하세요!"),
  userPhoneNo: Yup.string()
    .matches(phoneRegEXp, "올바른 휴대폰 번호형식이 아닙니다.")
    .required("휴대폰 번호를 입력하세요"),
  userPassword: Yup.string().required("패스워드를 입력하세요!"),
  password2: Yup.string()
    .oneOf([Yup.ref("userPassword"), null], "비밀번호가 일치하지 않습니다")
    .required("필수 입력 값입니다!"),
});

const submit = (values) => {
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
    userMarketingAgree,
  } = values;

  form.append("userId", userId);
  form.append("userName", userName);
  form.append("userEmail", userEmail);
  form.append("userPassword", userPassword);
  form.append("userMarketingAgree", userMarketingAgree);
  form.append("userAccessCd", userAccessCd);
  form.append("userPhoneNo", userPhoneNo);
  form.append("userStatusCd", userStatusCd);
  form.append("userNickname", userNickname);

  axiosAPI.post("/user/signUpUser", form).then((res) => {
    if (res.data.result === "OK") {
      console.log(res.data.data);
      alert("회원등록 완료하였습니다. 로그인 하세요", {
        position: "top-center",
      });
    } else {
      alert("실패하였습니다. 다시 시도하세요", {
        position: "top-center",
      });
    }
  });
};
const SignUp = () => {
  const formik = Formik({
    initialValues: {
      userId: "",
      userEmail: "",
      userNickname: "",
      userPassword: "",
      passwordCheck: "",
      userPhoneNo: "",
      userName: "",
      userAccessCd: "y",
      userStatusCd: "use",
      userMarketingAgree: "y",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submit(values);
    },
  });

  return (
    // BeforeUnloadMethod(),

    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <>
        {/* contatiner가 DOM 요소의 조각이 아니라서 maxWidth를 사용핳 때 오류가 남, <> Fragment 조각으로 Dom요소임을 알려줌 */}
        <br />
        {/* 회원가입 폼 테두리 */}
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 10,
            borderRadius: 4,
            p: 3,
            height: "90%",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <br />
            {/* User Id */}
            <Box component="div" sx={{ display: "inline" }}>
              <TextField
                fullWidth
                sx={{
                  bgcolor: "background.paper",
                  m: 1,
                  float: "left",
                }}
                id="userId"
                name="userId"
                label="User ID"
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                // onChange={formik.handleChange}
              />
              {/* <ErrorMessage name="userId" /> */}
            </Box>

            <Box component="div" sx={{ display: "inline" }}>
              <Button
                variant="contained"
                size="small"
                sx={{ float: "left", m: 1 }}
              >
                아이디 중복체크
              </Button>
              <TextField
                sx={{
                  bgcolor: "background.paper",
                  m: 1,
                  width: "30%",
                  opacity: "1.0",
                }}
                id="userPassword"
                name="userPassword"
              />
            </Box>

            <br />

            <Box component="div" sx={{ display: "inline" }}>
              <TextField
                sx={{ bgcolor: "background.paper", float: "left", m: 1 }}
                id="userPassword"
                name="userPassword"
                label="User Password"
              />
            </Box>
            <Box component="div" sx={{ display: "inline" }}>
              <TextField
                sx={{ bgcolor: "background.paper", m: 1 }}
                id="passwordCheck"
                name="passwordCheck"
                label="Password Check"
              />
            </Box>

            <br />

            <Box component="div" sx={{ display: "inline" }}>
              <TextField
                fullWidth
                sx={{
                  bgcolor: "background.paper",
                  m: 1,
                  float: "left",
                }}
                id="userEmail"
                name="userEmail"
                label="Email"
              />
            </Box>

            <br />

            <Box component="div" sx={{ display: "inline" }}>
              <TextField
                fullWidth
                sx={{ bgcolor: "background.paper", m: 1, float: "left" }}
                id="UserPhoneNum"
                name="UserPhoneNum"
                label="Phone Number"
              />
            </Box>
          </form>
        </Box>
      </>
    </Container>
  );
};
export default SignUp;
