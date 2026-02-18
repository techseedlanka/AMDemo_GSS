import React from 'react';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header bg-white shadow-sm d-flex align-items-center justify-content-between px-4" style={{ height: '70px', position: 'sticky', top: 0, zIndex: 900 }}>
            <div className="search-bar d-flex align-items-center bg-light px-3 py-2 rounded-2" style={{ width: '350px' }}>
                <FaSearch className="text-muted me-2" />
                <input
                    type="text"
                    placeholder="Global Search Assets, Employees..."
                    className="bg-transparent border-0 w-100"
                    style={{ outline: 'none', fontSize: '0.9rem' }}
                />
            </div>

            <div className="d-flex align-items-center">
                <div className="position-relative me-4 cursor-pointer">
                    <FaBell className="text-secondary fs-5" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: '0.6rem', padding: '0.3em 0.5em' }}>
                        5
                    </span>
                </div>

                <div className="d-flex align-items-center border-start ps-4">
                    <div className="text-end me-3">
                        <p className="mb-0 fw-bold" style={{ fontSize: '0.9rem' }}>Admin User</p>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>System Administrator</small>
                    </div>
                    <FaUserCircle className="text-primary fs-2" />
                </div>
            </div>
        </header>
    );
};

export default Header;
