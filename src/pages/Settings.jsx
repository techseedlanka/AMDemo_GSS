import React, { useState } from 'react';
import Card from '../components/Card';
import {
    FaCog,
    FaLayerGroup,
    FaTags,
    FaUserShield,
    FaBell,
    FaCalculator,
    FaPlus,
    FaTrash
} from 'react-icons/fa';

const Settings = () => {
    const [depreciationEnabled, setDepreciationEnabled] = useState(true);

    return (
        <div className="settings-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">System Settings</h4>
                    <p className="text-muted small">Configure global asset management parameters and user access.</p>
                </div>
            </div>

            <div className="row g-4">
                {/* Categories and Statuses */}
                <div className="col-lg-6">
                    <Card title="Asset Categories" icon={<FaLayerGroup />}>
                        <div className="list-group list-group-flush">
                            {['Laptop', 'Desktop', 'Vehicle', 'Phone', 'Furniture'].map(cat => (
                                <div key={cat} className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                    <div>
                                        <span className="fw-medium">{cat}</span>
                                        <div className="small text-muted">12 Assets</div>
                                    </div>
                                    <button className="btn btn-sm btn-outline-danger border-0"><FaTrash /></button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-light btn-sm w-100 mt-3 fw-bold text-primary py-2 d-flex align-items-center justify-content-center gap-2">
                            <FaPlus /> Add New Category
                        </button>
                    </Card>

                    <div className="mt-4">
                        <Card title="Asset Status Management" icon={<FaTags />}>
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {['Available', 'Assigned', 'Maintenance', 'Lost', 'Damaged', 'Returned'].map(status => (
                                    <div key={status} className="p-2 border rounded bg-light d-flex align-items-center gap-3">
                                        <span className="small fw-medium">{status}</span>
                                        <FaCog className="text-muted cursor-pointer" style={{ fontSize: '0.75rem' }} />
                                    </div>
                                ))}
                                <button className="btn btn-primary btn-sm rounded-pill px-3"><FaPlus /> Add</button>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Roles and System Behavior */}
                <div className="col-lg-6">
                    <Card title="User Roles & Access Control" icon={<FaUserShield />}>
                        <table className="table table-sm table-borderless align-middle mb-0">
                            <thead>
                                <tr className="small text-muted text-uppercase">
                                    <th>Role</th>
                                    <th>Permissions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-bottom">
                                    <td className="py-3"><strong>Administrator</strong></td>
                                    <td><span className="badge bg-primary me-1">Full Access</span></td>
                                </tr>
                                <tr className="border-bottom">
                                    <td className="py-3"><strong>Asset Manager</strong></td>
                                    <td><span className="badge bg-secondary me-1">Inventory</span> <span className="badge bg-secondary">Reports</span></td>
                                </tr>
                                <tr className="border-bottom">
                                    <td className="py-3"><strong>IT Technician</strong></td>
                                    <td><span className="badge bg-secondary me-1">Maintenance</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-outline-primary btn-sm mt-3">Manage Roles</button>
                    </Card>

                    <div className="mt-4">
                        <Card title="Finance & Automation" icon={<FaCalculator />}>
                            <div className="form-check form-switch p-0 d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <label className="form-check-label h6 mb-0 fw-bold" htmlFor="depSwitch">Enable Auto-Depreciation</label>
                                    <p className="small text-muted mb-0">Calculate asset value decay monthly based on type.</p>
                                </div>
                                <input
                                    className="form-check-input ms-0 border-2"
                                    type="checkbox"
                                    id="depSwitch"
                                    checked={depreciationEnabled}
                                    onChange={() => setDepreciationEnabled(!depreciationEnabled)}
                                />
                            </div>

                            <div className="mb-0">
                                <label className="form-label small fw-bold text-uppercase"><FaBell className="me-2" /> Global Reminder Delay</label>
                                <select className="form-select">
                                    <option>7 Days before</option>
                                    <option selected>14 Days before</option>
                                    <option>30 Days before</option>
                                </select>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="mb-5"></div>
        </div>
    );
};

export default Settings;
