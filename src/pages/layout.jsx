import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.jsx'
const Layout = () => (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
);
export default Layout;
