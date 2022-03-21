import React from 'react';
import "./nav.css"
import {Link} from "react-router-dom";

const AdminLayout = () => {
    return (
            <div>
                <div className="leftInfoBarInner">
                    <Link to="/UserSetting"><h3>- 회원관리</h3></Link><br/>
                    <Link to="/BoardSetting"><h3>- 게시글관리</h3></Link><br/>
                    <Link to="/CommentSetting"><h3>- 댓글관리</h3></Link>
                </div>
            </div>

    );
};

export default AdminLayout;