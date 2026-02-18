import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    return (
        <div className="d-flex">
            {/* Sidebar - Fixed width */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="main-wrapper d-flex flex-column flex-grow-1" style={{ marginLeft: '280px', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
                <Header />

                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
