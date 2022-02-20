import React, {Component} from 'react';
import {useEffect, useState} from "react";
import Layout from "../Route/Layout";
import FactosRouter from "../Route/FactosRouter";
function UserSetting() {

    const [message, setMessage] = useState([]);
    useEffect(() => {
        fetch("/getUserAllList")
            .then((response) => {
                return response.json();
            })
            .then(function (data) {
                setMessage(data);
            });
    }, []);

    fetch("/saveUser", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user_Id: "jaeseok",
            user_Name: "바껴라"
        })
    })
        .then(response => console.log("response"))
        .then(response => response.json())
        .then(response => {

        });

    return (
        <div>
            <ul>
                 {message.map((text, index) => <li key={`${index}-${text.user_Id}`}>{text.user_Id}</li>)}
                 {message.map((text, index) => <li key={`${index}-${text.user_Seq}`}>{text.user_Seq}</li>)}
                 {message.map((text, index) => <li key={`${index}-${text.user_Name}`}>{text.user_Name}</li>)}
                 {message.map((text, index) => <li key={`${index}-${text.user_Nickname}`}>{text.user_Nickname}</li>)}
            </ul>
        </div>

    );
}

export default UserSetting;