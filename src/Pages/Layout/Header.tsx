import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="flex justify-center">
        <Logo_default>So Hyeppy</Logo_default>
        <Nav>
          <NavItem className="font-bold hover:underline">근무/휴가</NavItem>
        </Nav>
      </div>
      <div className="flex justify-center items-center ">
        <Notification className="border-[1px] border-[#a8a8a8] leading-8">알림</Notification>
        <UserName className="leading-[45px]">so hyeppy</UserName>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.header`
  fixed top-0 left-0 flex justify-between items-center w-full h-[85px] pl-[30px] pr-[25px] 
  z-50 bg-white border-b border-[#a8a8a8] border-solid 
`;
const Nav = tw.ul`
  flex ml-[50px]
`;
const NavItem = tw.li`
  text-[#12121D] cursor-pointer mr-[5px] leading-[27px] hover:underline hover:text-[#4B77EE]
`;
const Logo_default = tw.h1`
  text-[27px] font-bold cursor-pointer
`;
const UserName = tw.div`
    w-[47px] h-[47px] bg-[#D9D9D9] text-[#FFF] rounded-full text-center leading-[45px] text-[9px] cursor-pointer
`;

const Notification = tw.div`
    w-[30px] h-[30px] border-solid border-2 border-[#a8a8a8] rounded-full leading-1 text-[9px] 
    text-center leading-8 mr-[10px] cursor-pointer
`;

export default Header;
