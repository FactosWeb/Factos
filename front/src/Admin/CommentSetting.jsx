import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Admin from "./Admin.css"
import AdminLayout from "../Route/AdminLayout";
import axios from "axios";
function CommentSetting() {

    const [CommentList, setCommentList] = useState(null);
    const getList = () => {
        axios({
            method: "GET",
            url: "/getCommentAllList",
        })
            .then((res) => {
                setCommentList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getList();
    }, []);


    return (
        CommentList &&(
            <div>
                <AdminLayout/>
                <div className="MainTableDiv">
                    <h2>댓글관리</h2>
                    <select>
                        <option value="정상">정상</option>
                        <option value="비공개">비공개</option>
                        <option value="신고">신고</option>
                    </select>
                    <select>
                        <option value="글번호">댓글번호</option>
                        <option value="작성자">작성자</option>
                    </select>
                    <input type="text" id="schParam"/>
                    <button>검색</button>
                    <table className="MainTable">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>댓글번호</th>
                            <th>게시글번호</th>
                            <th>게시판이름</th>
                            <th>작성자ID</th>
                            <th>댓글 작성날짜</th>
                            <th>댓글상태</th>
                            <th>댓글 상태변경</th>
                        </tr>
                        </thead>
                        <tbody>
                        {CommentList.length > 0 ? (
                            CommentList.map((Comment, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{Comment.cm_No}</td>
                                    <td>{Comment.bd_Seq}</td>
                                    <td> {
                                        (function(){
                                            if(Comment.bd_Board_Cd == '100'){
                                                return ("축덕축덕")
                                            }else if(Comment.bd_Board_Cd == '200'){
                                                return ("해외축구")
                                            }else if(Comment.bd_Board_Cd == '300'){
                                                return ("국내축구")
                                            }else{
                                                return ("자유게시판")
                                            }
                                        })()
                                    }
                                    </td>
                                    <td>{Comment.cm_Create_User_Id}</td>
                                    <td>{Comment.cm_Create_Date}</td>
                                    <td> {
                                        (function(){
                                            if(Comment.cm_Status_Cd == '10'){
                                                return ("정상")
                                            }else if(Comment.cm_Status_Cd == '20'){
                                                return ("신고")
                                            }else if(Comment.cm_Status_Cd == '30'){
                                                return ("비공개")
                                            }else{
                                                return ("삭제")
                                            }
                                        })()
                                    }
                                    </td>
                                    <td>
                                        <button>댓글삭제</button>&nbsp;&nbsp;
                                        <button>댓글비공개</button>&nbsp;&nbsp;
                                        <button>댓글공개</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">데이터가 없습니다.</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
}

export default CommentSetting;