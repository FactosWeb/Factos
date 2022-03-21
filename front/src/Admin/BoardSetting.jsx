import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Admin from "./Admin.css"
import AdminLayout from "../Route/AdminLayout";
import axios from "axios";
function BoardSetting() {

    const [BoardList, setBoardList] = useState(null);
    const getList = () => {
        axios({
            method: "GET",
            url: "/getBoardAllList",
        })
            .then((res) => {
                setBoardList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getList();
    }, []);


    return (
        BoardList &&(
            <div>
                <AdminLayout/>
                <div className="MainTableDiv">
                    <h2>게시판 관리</h2>
                    <select>
                        <option value="정상">정상</option>
                        <option value="비공개">비공개</option>
                        <option value="신고">신고</option>
                    </select>
                    <select>
                        <option value="글번호">글번호</option>
                        <option value="글제목">글제목</option>
                        <option value="작성자">작성자</option>
                    </select>
                    <input type="text" id="schParam"/>
                    <button>검색</button>
                    <table className="MainTable">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>글번호</th>
                            <th>게시판 이름</th>
                            <th>게시글 상태</th>
                            <th>게시글 작성자 ID</th>
                            <th>게시글 작성날짜</th>
                            <th>게시글 조회수</th>
                            <th>게시글 추천수</th>
                            <th>게시글 비추천수</th>
                            <th>게시글 상태</th>
                            <th>게시글 상태변경</th>
                        </tr>
                        </thead>
                        <tbody>
                        {BoardList.length > 0 ? (
                            BoardList.map((Board, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{Board.bd_No}</td>
                                    <td> {
                                        (function(){
                                            if(Board.bd_Borad_Cd == '100'){
                                                return ("축덕축덕")
                                            }else if(Board.bd_Borad_Cd == '200'){
                                                return ("해외축구")
                                            }else if(Board.bd_Borad_Cd == '300'){
                                                return ("국내축구")
                                            }else{
                                                return ("자유게시판")
                                            }
                                        })()
                                    }
                                    </td>
                                    <td>{Board.bd_Title}</td>
                                    <td>{Board.bd_Create_User_Id}</td>
                                    <td>{Board.bd_Create_Dt}</td>
                                    <td>{Board.bd_View_Cnt}</td>
                                    <td>{Board.bd_Recommend_Cnt}</td>
                                    <td>{Board.bd_Not_Recommend_Cnt}</td>
                                    <td> {
                                        (function(){
                                            if(Board.bd_Status_Cd == '10'){
                                                return ("정상")
                                            }else if(Board.bd_Status_Cd == '20'){
                                                return ("신고")
                                            }else if(Board.bd_Status_Cd == '30'){
                                                return ("비공개")
                                            }else{
                                                return ("삭제")
                                            }
                                        })()
                                    }
                                    </td>
                                    <td>
                                        <button>게시글삭제</button>&nbsp;&nbsp;
                                        <button>게시글비공개</button>&nbsp;&nbsp;
                                        <button>게시글공개</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">데이터가 없습니다</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    );
}

export default BoardSetting;