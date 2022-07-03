import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import Terms from "../User/Terms"
import UserSetting from "../Admin/UserSetting";
import BoardSetting from "../Admin/BoardSetting";
import CommentSetting from "../Admin/CommentSetting";
const FactosRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element ={<Login/>} />
                    <Route path="/SignUp" element ={<SignUp/>} />
                    <Route path="/Terms" element ={<Terms/>} />
                    <Route path="/UserSetting" element ={<UserSetting/>} />
                    <Route path="/BoardSetting" element ={<BoardSetting/>} />
                    <Route path="/CommentSetting" element ={<CommentSetting/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default FactosRouter;