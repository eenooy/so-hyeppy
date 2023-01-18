import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginUser } from '../../Atom/Users';

const SoyoonPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useRecoilState(loginUser);

  console.log('loginUser :: @@', loginUser);
  return (
    <>
      <div>SoyoonPage 입니다.</div>
      <input type="text" defaultValue={userName} onChange={(e) => setUserName((name) => e.target.value)} />
      <button onClick={() => navigate('/soyoon/login')}>로그인페이지로!</button>
      <div>{userName && userName}</div>
    </>
  );
};

export default SoyoonPage;
