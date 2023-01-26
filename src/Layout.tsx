import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Pages/Layout/Header';
import Footer from './Pages/Layout/Footer';
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
