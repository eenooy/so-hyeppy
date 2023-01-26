import React, { useState } from 'react';
import styled from 'styled-components';

console.log(location, 'location ::');

const Nav: React.FC = () => {
  return <NavContainer></NavContainer>;
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0px;
  width: 240px;
  height: 100%;
  background-color: pink;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 49;
`;

export default Nav;
