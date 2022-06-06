import React, {useEffect, useState} from 'react';

//전체 체크 기능, 개별 체크 기능, 모든 체크박스 체크시 전체 체크도 체크

function Terms() {
    const [allCheck, setAllCheck] = useState(false);
    const [termCheck, setTermCheck] = useState(false);
    const [personalCheck, setPersonalCheck] = useState(false);
    const [nextButtonCheck, setnextButtonCheck] = useState(false);

    const allBtnEvent = () => {
        if (allCheck === false) {
            setAllCheck(true);
            setTermCheck(true);
            setPersonalCheck(true);
        }
        else {
            setAllCheck(false);
            setTermCheck(false);
            setPersonalCheck(false);
        }
    };

    const termBtnEvent = () => {
        if (termCheck === false) {
            setTermCheck(true)
        }
        else {
            setTermCheck(false)
        }
    };

    const personalBtnEvent = () => {
        if (personalCheck === false) {
            setPersonalCheck(true)
        }
        else {
            setPersonalCheck(false)
        }
    };

    useEffect(() => {
        if (termCheck === true && personalCheck === true) {
            setAllCheck(true)
        }
        else {
            setAllCheck(false)
        }
    }, [termCheck, personalCheck])

    const termFormStyle = {
        width       : '80%',
        marginTop   : '5%',
        marginLeft  : '10%',
        marginRight : '10%',
        marginBottom: '5%',
        resize      : 'none'
    }
    const nextButtonStyle = {
        width            : '150px'
        , height         : '40px'
        , fontSize       : '20px'
        , color          : 'white'
        , backgroundColor: 'red'
        , borderRadius   : '30px'
        , borderColor    : 'white'
    }

    const termTitleStyle = {
        textAlign : 'left',
        marginLeft: '10%',
        fontSize  : '20px',
        height    : '100%',
        width     : '80%'
    }


    return (
        <div>
            <form style={termFormStyle} name="termForm" action="/signUp" method="Get">
                <div>
                    <p style={termTitleStyle}>이용약관</p>
                    <br/>
                    <textarea placeholder={"개인정보활용 동의 들어가야지"} disabled={true}
                              style={{height: '100%', width: '80%', resize: "none"}} rows={20}></textarea>
                </div>
                <div>
                    <p style={{fontSize: '20px'}}><input name="termCheck" checked={termCheck}
                                                         type="checkbox" onChange={termBtnEvent}/>이용약관을 읽었으며,해당 내용에 동의합니다 <strong>(필수)</strong>
                    </p>
                </div>
                <br/>
                <div>
                    <p style={termTitleStyle}>개인정보 수집 및 이용에 관한 약관</p>
                    <textarea placeholder={"이용 약관이 들어가야지"} disabled={true} style={{height: '100%', width: '80%', resize: "none"}} rows={20}></textarea>
                </div>
                <div>
                    <p style={{fontSize: '20px'}}><input name="personalCheck" checked={personalCheck}
                                                         type="checkbox" onChange={personalBtnEvent}/>이용약관을 확인하였으며, 약관에 동의합니다 <strong>(필수)</strong></p>
                    <br/>
                    <p style={{fontSize: '20px'}}><input name="termCheck" checked={allCheck} value={"selectAll"}
                                                         type="checkbox" onChange={allBtnEvent}/>모든 약관에 동의합니다</p>
                </div>
                <div><input style={nextButtonStyle} type="submit" disabled={true} value={"다음"}/></div>
            </form>
        </div>
    );
}

export default Terms;
