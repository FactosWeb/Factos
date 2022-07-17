import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import Terms from "../User/Terms";
import Main from "../Main/Main"
import UserSetting from "../Admin/UserSetting";
import BoardSetting from "../Admin/BoardSetting";
import CommentSetting from "../Admin/CommentSetting";
import Editor from "../Admin/Editor";
import Test from "../Admin/test";

const FactosRouter = () => {
    return (
        <div style={{height : '80vh' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/SignUp" element={<SignUp/>}/>
                    <Route path="/Terms" element={<Terms/>}/>
                    <Route path="/UserSetting" element={<UserSetting/>}/>
                    <Route path="/BoardSetting" element={<BoardSetting/>}/>
                    <Route path="/CommentSetting" element={<CommentSetting/>}/>
                    <Route path="/editor" element={<Editor/>}/>
                    <Route path="/test" element={<Test/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default FactosRouter;