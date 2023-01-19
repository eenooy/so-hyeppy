import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginUser } from '../../Atom/Users';

const SoyoonLogin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useRecoilState(loginUser);

  console.log('loginUser :: @@ 22', loginUser);
  return (
    <>
      <div>SoyoonPage LoginPage 입니다.</div>
      <div>
        뭐가 뜰까요? 저장이 되었을까요?
        <br />
        <span style={{ fontSize: '20px', fontWeight: '700' }}>{userName}</span>
      </div>
      <button
        onClick={() => {
          navigate(-1);
          setUserName((name) => '초기화 뿜!!!!');
        }}
      >
        뒤로가기!
      </button>
    </>
  );
};

export default SoyoonLogin;
