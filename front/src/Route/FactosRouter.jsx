import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import Main from "../Main/Main"
import UserSetting from "../Admin/UserSetting";
import BoardSetting from "../Admin/BoardSetting";
import CommentSetting from "../Admin/CommentSetting";

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
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default FactosRouter;