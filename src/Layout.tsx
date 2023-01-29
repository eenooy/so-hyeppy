import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Layout/Footer';
import Header from './Pages/Layout/Header';
import LoginCheck from './Components/LoginCheck';

const Layout = () => {
  LoginCheck();
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
