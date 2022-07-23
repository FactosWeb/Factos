import React, { useState } from "react";
import axiosAPI from "../Common/CommonAxios";
import { Button, Box, Typography, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Container } from "@mui/system";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", inputId);
    console.log("PW : ", inputPw);
    axiosAPI
      .post("/user/login", {
        params: {
          userId: inputId,
          userPassword: inputPw,
          user_id: inputId,
          user_Password: inputPw,
        },
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        if (res.data.userId === undefined) {
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.userPassword === null) {
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.userId === inputId) {
          sessionStorage.setItem("userId", inputId);
        }
        document.location.href = "/";
      })
      .catch();
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <Box>
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
          <Typography variant="h4" gutterBottom component="div">
            Login
          </Typography>
          <FormControl>
            <TextField
              label="ID"
              type="text"
              name="input_id"
              value={inputId}
              onChange={handleInputId}
            />
            <FormHelperText>We'll never share your Id.</FormHelperText>

            <TextField
              label="Passwd"
              type="password"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>

            <Button type="button" onClick={onClickLogin}>
              Login
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
