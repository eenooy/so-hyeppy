import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Layout/Footer';
import Header from './Pages/Layout/Header';
import Nav from './Pages/Layout/Nav';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
