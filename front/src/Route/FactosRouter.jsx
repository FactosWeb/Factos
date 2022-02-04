import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import Main from "../Main/Main"

const FactosRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element ={<Main/>} />
                    <Route path="/main" element ={<Main/>} />
                    <Route path="/login" element ={<Login/>} />
                    <Route path="/SignUp" element ={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default FactosRouter;