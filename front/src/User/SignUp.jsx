import React, {useState} from 'react';
import { Form , Input , Checkbox , Button} from 'antd';

const SignUp = () => {
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const [idError,setIdError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        // 검증로직만들기
        // 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증
        // 2. 약관 동의확인
        if(password != passwordCheck){
            return setPasswordError(true);
        }
        if(id.length < 5 || id.length>10){
            return setIdError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        })
    }
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    
    
    return (
        
        <Form onSubmit={onSubmit} style={{padding:10}}>
        <div>
            <label htmlFor="user-id">아이디</label><br/>
            <Input name="user-id" value={id} required onChange={onChangeId} />
            {idError && <div style={{color : 'red'}}>아이디는 5자 이상 10자 미만으로 해주세요.</div>}
        </div>
        <div>
            <label htmlFor="user-nick">닉네임</label><br/>
            <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label><br/>
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
            <label htmlFor="user-password-check">비밀번호체크</label><br/>
            <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
            {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
        </div>
            <div>
                약관
                <input type="text" placeholder={'- 시작은 인스타그램, 더 나아가서는 유튜브까지 활용하여 콘텐츠 제작을 할 예정으로 기획\n' +
                '- 제작한 콘텐츠를 기반으로 **수익창출 및 향후 관련 사업 전개에 있어 업계 내 저변을 넓힐 수 있는 도구로 활용해나갈 예정**.\n' +
                '- 인스타그램, 유튜브 등 SNS만을 활용한다면 라이트한 콘텐츠를 생산하는 존재로 남겠지만, 웹페이지를 개설하고 이를 직접 운영하여 콘텐츠를 배포하는 것 뿐만이 아니라 사용자의 소통의 장을 물론, 초석으로 사용할 예정.'} />
            </div>
        <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의 하십니까?</Checkbox>
            {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{marginTop:10}}>
            <Button type="primary" htmlType="submit" >가입하기</Button>
        </div>
    </Form>    
        
    );
};

export default SignUp;