import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Layout/Footer';
import Header from './Pages/Layout/Header';
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
