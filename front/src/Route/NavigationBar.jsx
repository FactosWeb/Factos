import React from 'react';

import "./nav.css"

const NavigationBar = () => {
    return (
        <header>
            <div>
                <nav className="navbar">
                    <div>
                        <a href=""><h5>Factos</h5></a>
                    </div>
                    <div className="information">
                    <input type="text" placeholder={"키워드를 입력하세요"}/>
                    </div>
                    <ul></ul>
                </nav>
            </div>
            <div>
                <nav className="navbar">
                    <div className="navbar__logo">
                        <a href="Main"><p>축덕이 미래다</p></a>
                    </div>

                    <ul className="navbar__menu">
                        <li><a href="#"><h3>라이브뉴스</h3></a></li>
                        <li><a href="#"><h3>축덕축덕</h3></a></li>
                        <li><a href="#"><h3>해외축구 컨텐츠</h3></a></li>
                        <li><a href="#"><h3>국내축구 컨텐츠</h3></a></li>
                    </ul>

                    <ul className="information">
                        <li><a href="/login">로그인</a></li>
                        <li><a href="/signup">회원가입</a></li>
                    </ul>
                </nav>
            </div>


        </header>

    );
};

export default NavigationBar;