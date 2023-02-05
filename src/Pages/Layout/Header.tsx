import React, { useState } from 'react';
import tw from 'tailwind-styled-components';

import { useCookies } from 'react-cookie'; // useCookies import
import { useNavigate } from 'react-router';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['id']);

  /*로그아웃*/
  const logOut = () => {
    removeCookie('id'); // 쿠키를 삭제
    navigate('/'); // 메인 페이지로 이동
  };
  return (
    <HeaderContainer>
      <div className="flex justify-center">
        <Logo_default>🐱💙 So Hyeppy</Logo_default>
        <Nav>
          <NavItem className="mr-[24px]">홈</NavItem>
          <NavItem>근무/휴가</NavItem>
        </Nav>
      </div>
      <div className="flex justify-center items-center ">
        <button onClick={logOut} className="font-bold hover:underline mr-5">
          로그아웃
        </button>
        <Notification>
          <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#555e7f">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
          </svg>
        </Notification>

        <UserName className="leading-[45px]">so hyeppy</UserName>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.div`
  flex justify-between items-center w-full h-[85px] pl-[30px] pr-[25px]
  border-b border-[#dcdcdd] border-solid 
`;
const Nav = tw.ul`
  flex ml-[50px]
`;
const NavItem = tw.li`
  hover:underline hover:font-bold text-[16px] leading-[31px]
  text-[#12121D] cursor-pointer mr-[5px] leading-[27px] hover:underline hover:text-[#4B77EE]
`;
const Logo_default = tw.h1`
  text-[27px] font-bold cursor-pointer
`;
const UserName = tw.div`
    w-[47px] h-[47px] bg-[#D9D9D9] text-[#FFF] rounded-full text-center leading-[45px] text-[9px] cursor-pointer
`;

const Notification = tw.div`
    flex justify-center items-center 
    w-[40px] h-[40px] border-solid border-2 border-[#dcdcdd] rounded-full leading-1 text-[9px] 
    text-center leading-8 mr-[10px] cursor-pointer leading-[31px] border-[1px]
`;

export default Header;
