import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen bg-gray-100'>
                <Home />
            </div>
            <Footer />
        </>
    );
};