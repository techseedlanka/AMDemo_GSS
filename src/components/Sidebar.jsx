import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaTachometerAlt,
    FaList,
    FaPlus,
    FaUserTag,
    FaUndo,
    FaTools,
    FaCalendarTimes,
    FaUsers,
    FaChartBar,
    FaCog
} from 'react-icons/fa';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/', icon: <FaTachometerAlt /> },
        { name: 'Asset Register', path: '/assets', icon: <FaList /> },
        { name: 'Add Asset', path: '/add-asset', icon: <FaPlus /> },
        { name: 'Assign Asset', path: '/assign-asset', icon: <FaUserTag /> },
        { name: 'Asset Returns', path: '/asset-returns', icon: <FaUndo /> },
        { name: 'Maintenance & Repairs', path: '/maintenance', icon: <FaTools /> },
        { name: 'Expiry & Compliance', path: '/expiry', icon: <FaCalendarTimes /> },
        { name: 'Employee Asset Summary', path: '/employees', icon: <FaUsers /> },
        { name: 'Reports', path: '/reports', icon: <FaChartBar /> },
        { name: 'Settings', path: '/settings', icon: <FaCog /> },
    ];

    return (
        <div className="sidebar bg-dark text-white p-0 d-flex flex-column" style={{ width: '280px', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1000 }}>
            <div className="p-4 border-bottom border-secondary mb-3">
                <h5 className="mb-0 text-primary fw-bold text-uppercase letter-spacing-1">Asset Manager</h5>
                <small className="text-muted">Enterprise Solution</small>
            </div>
            <nav className="nav nav-pills flex-column flex-grow-1 px-3 mb-0 pb-3 custom-scrollbar" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `nav-link text-white d-flex align-items-center mb-1 py-2 px-3 rounded-0 border-start border-4 ${isActive ? 'bg-primary border-primary' : 'border-transparent'}`}
                        style={({ isActive }) => ({
                            backgroundColor: isActive ? 'rgba(13, 110, 253, 0.1)' : 'transparent',
                            borderColor: isActive ? '#0d6efd' : 'transparent',
                            transition: 'all 0.3s ease'
                        })}
                    >
                        <span className="me-3 fs-6 d-flex align-items-center">{item.icon}</span>
                        <span className="fw-medium text-uppercase" style={{ fontSize: '0.7rem' }}>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-top border-secondary text-center">
                <small className="text-muted">© 2026 Asset Systems v1.0</small>
            </div>
        </div>
    );
};

export default Sidebar;
