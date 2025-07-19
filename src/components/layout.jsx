import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
const layout = () => (
    <>
    <Navbar/>
    <Outlet />
    </>
);
export default layout;
