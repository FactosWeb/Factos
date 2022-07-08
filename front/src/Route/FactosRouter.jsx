import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import Main from "../Main/Main"
import UserSetting from "../Admin/UserSetting";
import BoardSetting from "../Admin/BoardSetting";
import CommentSetting from "../Admin/CommentSetting";
import editor from "../Admin/Editor";
import test from "../Admin/test";

const FactosRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element ={<Main/>} />
                    <Route path="/login" element ={<Login/>} />
                    <Route path="/SignUp" element ={<SignUp/>} />
                    <Route path="/UserSetting" element ={<UserSetting/>} />
                    <Route path="/BoardSetting" element ={<BoardSetting/>} />
                    <Route path="/CommentSetting" element ={<CommentSetting/>} />
                    <Route path="/editor" element ={<editor/>} />
                    <Route path="/test" element ={<test/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default FactosRouter;