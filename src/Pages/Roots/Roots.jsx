import React from 'react';
import Navbar from '../../Component/Header/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Roots = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;