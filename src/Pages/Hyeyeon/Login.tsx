import React, { useState } from 'react';
import { RecoilRootProps, useRecoilValue, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router';
import { IUser, User, LoginState } from '../../Atom/Atoms';
import styled from 'styled-components';
import Button from '../../Components/Button';
import tw from 'tailwind-styled-components';

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
      alert('로그인 실패: admin,pw 를 입력해야 넘어감');
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
      <Login>
        <LoginBox>
          <div className="font-bold text-[18px] mb-[20px]">로그인</div>
          <StyledInput
            className="input mb-[10px]"
            name="userId"
            value={userId}
            placeholder="아이디를 입력하세요"
            onChange={onChange}
          />
          <StyledInput
            className="input mb-[10px]"
            name="userPw"
            value={userPw}
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
          />
          <Button className="h-[40px] rounded-[5px] bg-[#2083F8] leading-[15px]" onClick={onClick}>
            로그인
          </Button>
        </LoginBox>
      </Login>
    </>
  );
};

const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
  min-height: 100vh;
  background-color: #1367ca;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 456px;
  background-color: #fff;
  border-radius: 8px;
  padding: 50px;
`;

const StyledInput = styled.input`
  border: 1px solid #dcdcdd;
  background-color: #fff;
  padding: 10px 15px;
`;
export default HyeyeonLogin;
