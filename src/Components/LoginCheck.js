//check and logout

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const LoginCheck = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['id']);
  const [userID, setUserId] = useState(null);
  const navigate = useNavigate();

  const authCheck = () => {
    // 페이지에 들어올때 쿠키로 사용자 체크
    const token = cookies.id; // 쿠키에서 id 를 꺼내기
    console.log('token', token);
    if (token == undefined) {
      navigate('/hyeyeon/login');
    }
  };

  useEffect(() => {
    authCheck(); // 로그인 체크 함수
  });
};
export default LoginCheck;