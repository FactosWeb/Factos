import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Admin from "./Admin.css"
import AdminLayout from "../Route/AdminLayout";
import axios from "axios";
<<<<<<< HEAD

=======
>>>>>>> d704a46473cac200fa1248180dfaa0fb9cc851f4
function UserSetting() {

    const [UserList, setUserList] = useState(null);
    const getList = () => {
        axios({
            method: "GET",
            url: "/getUserAllList",
        })
            .then((res) => {
                setUserList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getList();
    }, []);


    return (
<<<<<<< HEAD
        UserList && (
=======
        UserList &&(
>>>>>>> d704a46473cac200fa1248180dfaa0fb9cc851f4
            <div>
                <AdminLayout/>
                <div className="MainTableDiv">
                    <h2>회원관리</h2>
                    <select>
                        <option value="정상">정상</option>
                        <option value="탈퇴">탈퇴</option>
                        <option value="휴면">휴면</option>
                        <option value="휴면">제한</option>
                    </select>
                    <select>
                        <option value="Id">ID</option>
                        <option value="이름">이름</option>
                        <option value="이름">닉네임</option>
                    </select>
                    <input type="text" id="schParam"/>
                    <button>검색</button>
                    <table className="MainTable">
                        <thead>
<<<<<<< HEAD
                        <tr>
                            <th>No</th>
                            <th>회원번호</th>
                            <th>회원ID</th>
                            <th>회원이름</th>
                            <th>회원닉네임</th>
                            <th>회원상태</th>
                            <th>회원상태변경</th>
                        </tr>
=======
                            <tr>
                                <th>No</th>
                                <th>회원번호</th>
                                <th>회원ID</th>
                                <th>회원이름</th>
                                <th>회원닉네임</th>
                                <th>회원상태</th>
                                <th>회원상태변경</th>
                            </tr>
>>>>>>> d704a46473cac200fa1248180dfaa0fb9cc851f4
                        </thead>
                        <tbody>
                        {UserList.length > 0 ? (
                            UserList.map((User, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{User.user_Seq}</td>
                                    <td>{User.user_Id}</td>
                                    <td>{User.user_Name}</td>
                                    <td>{User.user_Nickname}</td>
                                    <td> {
<<<<<<< HEAD
                                        (function () {
                                            if (User.user_Status_Cd == '10') {
                                                return ("정상")
                                            } else if (User.user_Status_Cd == '20') {
                                                return ("제한")
                                            } else if (User.user_Status_Cd == '30') {
                                                return ("휴면")
                                            } else {
=======
                                        (function(){
                                            if(User.user_Status_Cd == '10'){
                                                return ("정상")
                                            }else if(User.user_Status_Cd == '20'){
                                                return ("제한")
                                            }else if(User.user_Status_Cd == '30'){
                                                return ("휴면")
                                            }else{
>>>>>>> d704a46473cac200fa1248180dfaa0fb9cc851f4
                                                return ("탈퇴")
                                            }
                                        })()
                                    }
                                    </td>
                                    <td>
<<<<<<< HEAD
                                        <button>회원삭제</button>
                                        &nbsp;&nbsp;
                                        <button>활동복귀</button>
                                        &nbsp;&nbsp;
=======
                                        <button>회원삭제</button>&nbsp;&nbsp;
                                        <button>활동복귀</button>&nbsp;&nbsp;
>>>>>>> d704a46473cac200fa1248180dfaa0fb9cc851f4
                                        <button>활동제한</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">게시판이 없습니다</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
}

export default UserSetting;