// import React, { useState} from 'react';
// import axios from "axios";
//
// const form = new FormData();
//
// const axiosApi = (values: form, values2: any, values3: any) => {
//
//     axios({
//         header: {
//             'Content-type': 'application/json'
//         },
//         data: form,
//         url: values2,
//         method: values3,
//     });
// }
//
// //usetstate함수는 객체 형태를 받아야한다.
// const Login = (props: any) => {
//     const [ID, setID] = useState(); //const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값)
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//
//     const onIDHandler = (event) => {
//         setEmail((event.currentTarget.value))
//     } //이벤트가 일어나는 타겟의 value를 Email값으로 업데이트해준다.
//     const onEmailHandler = (event) => {
//         setEmail((event.currentTarget.value))
//     }
//     const onSubmit = (event) => {
//         axiosApi(form, '/login', 'get')
//     }
//
//
//     return (
//         <div>
//             <input onSubmit={onsubmit} />
//         </div>
//     );
// }
//
// export default Login;