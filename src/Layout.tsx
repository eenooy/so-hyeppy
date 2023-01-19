import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div
        className="bg-blue-400"
        style={{ backgroundColor: '#36f', height: '50px', color: '#fff', padding: '15px', fontSize: '25px' }}
      >
        렌더링이 잘 되는가
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
