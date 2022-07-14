import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


//전체 체크 기능, 개별 체크 기능, 모든 체크박스 체크시 전체 체크도 체크

function Terms() {
    const [checked, setChecked] = React.useState([false, false]);
    const [disabled, setDisabled] = useState(true);

    const allCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const check1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const check2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };
    useEffect(() => {
        if (!checked[1] && !checked[2]) {
            setDisabled(true)
        }
        else {
            setDisabled(false)
        }
    }, [checked[0], checked[1]])

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
                    <p style={{fontSize: '20px'}}>
                        <FormControlLabel label="이용약관을 읽었으며,해당 내용에 동의합니다"
                        control={<Checkbox defaultChecked color="error" checked={checked[0]} onChange={check1}/>}/>
                         <strong>(필수)</strong>
                    </p>
                </div>
                <br/>
                <div>
                    <p style={termTitleStyle}>개인정보 수집 및 이용에 관한 약관</p>
                    <textarea placeholder={"이용 약관이 들어가야지"} disabled={true}
                              style={{height: '100%', width: '80%', resize: "none"}} rows={20}></textarea>
                </div>
                <div>
                    <p style={{fontSize: '20px'}}>
                        <FormControlLabel label="이용약관을 확인하였으며, 약관에 동의합니다"
                        control={<Checkbox defaultChecked color="error" checked={checked[1]} onChange={check2}/>}/>
                    <strong>(필수)</strong></p>
                    <br/>
                    <p style={{fontSize: '20px'}}>
                        <FormControlLabel  label="모든 약관에 동의합니다"
                        control={<Checkbox defaultChecked color="error" checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={allCheck}/>}/>
                        </p>
                </div>
                <div><Button variant="contained" color="error" style={nextButtonStyle} type="submit" disabled={disabled}> 다음</Button></div>
            </form>
        </div>
    );
}

export default Terms;