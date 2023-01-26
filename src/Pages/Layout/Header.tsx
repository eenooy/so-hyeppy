import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="flex justify-center">
        <Logo_default>So Hyeppy</Logo_default>
        <ul className="flex ml-[50px]">
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </div>
      <div className="flex">
        <div>알림</div>
        <div>이름</div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = tw.header`
  fixed top-0 left-0 flex justify-between items-center w-full h-[85px] z-50 bg-white
`;
const Logo_default = styled.h1`
  font-size: 27px;
  color: #12121D;
  font-family: 'Rakkas';
  font-style: normal;
  font-weight: bold;
}
`;

export default Header;
