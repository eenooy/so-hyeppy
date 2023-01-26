import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Pages/Layout/Header';
import Footer from './Pages/Layout/Footer';
const Layout = () => {
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
