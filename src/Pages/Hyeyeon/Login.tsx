import React, { useState } from 'react';
import { RecoilRootProps, useRecoilValue, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import { IUser, User, LoginState } from '../../Atom/Atoms';
import styled from 'styled-components';
import Button from '../../Components/Button';
const StyledInput = styled.input`
  border: 1px solid #dcdcdd;
  background-color: #fff;
  padding: 10px 15px;
`;

const HyeyeonLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState<IUser>(User);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(LoginState);

  const [inputData, setInputData] = useState<any>({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = inputData;
  const onChange = (event: any) => {
    const { value, name } = event.target;
    // setInputData({ userId: event.target.value });
    console.log(event.target.name);
    console.log(event.target.value);
    const nextInputs = {
      ...inputData,
      [name]: value,
    };
    setInputData(nextInputs);
  };

  const onClick = () => {
    if (api(user)) {
      //페이지 이동
      console.log('페이지 이동');
      navigate('/hyeyeon');
    } else {
      console.log('로그인실패');
    }
  };

  const api = (reqUser: IUser) => {
    //api
    console.log('inputData', inputData);
    if (reqUser.id === inputData.userId && reqUser.pwd === inputData.userPw) {
      console.log('맞다');
      return true;
    } else {
      console.log('아니다');
      return false;
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginBox">
          <StyledInput
            className="input"
            name="userId"
            value={userId}
            placeholder="아이디를 입력하세요"
            onChange={onChange}
          />
          <StyledInput
            className="input"
            name="userPw"
            value={userPw}
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
          />
          <Button className="enter_btn" onClick={onClick}>
            로그인
          </Button>
        </div>
      </div>
    </>
  );
};

export default HyeyeonLogin;
