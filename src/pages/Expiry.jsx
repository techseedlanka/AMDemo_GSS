import React, { useState } from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import { FaCalendarTimes, FaBell, FaShieldAlt, FaSave } from 'react-icons/fa';

const Expiry = () => {
    const [reminderDays, setReminderDays] = useState(30);

    // Mock document data
    const documentExpiries = [
        { id: 1, asset: 'VH-001', type: 'Insurance Policy', date: '2024-11-10', daysRemaining: 12, status: 'Critical' },
        { id: 2, asset: 'VH-001', type: 'Revenue License', date: '2024-11-20', daysRemaining: 22, status: 'Warning' },
        { id: 3, asset: 'LP-001', type: 'Warranty', date: '2026-01-15', daysRemaining: 430, status: 'Active' },
        { id: 4, asset: 'PH-001', type: 'Insurance', date: '2025-01-05', daysRemaining: 320, status: 'Active' },
        { id: 5, asset: 'VH-002', type: 'Emission Test', date: '2024-10-15', daysRemaining: -5, status: 'Expired' },
    ];

    const columns = [
        { label: 'Asset Code', key: 'asset' },
        { label: 'Document Type', key: 'type' },
        { label: 'Expiry Date', key: 'date' },
        {
            label: 'Days Remaining',
            key: 'daysRemaining',
            render: (row) => {
                let textClass = 'text-success';
                if (row.daysRemaining < 0) textClass = 'text-danger fw-bold';
                else if (row.daysRemaining < 30) textClass = 'text-danger';
                else if (row.daysRemaining < 60) textClass = 'text-warning';

                return (
                    <span className={textClass}>
                        {row.daysRemaining < 0 ? `Expired (${Math.abs(row.daysRemaining)} days ago)` : `${row.daysRemaining} Days`}
                    </span>
                );
            }
        },
        {
            label: 'Status',
            key: 'status',
            render: (row) => {
                let color = 'success';
                if (row.status === 'Expired' || row.status === 'Critical') color = 'danger';
                if (row.status === 'Warning') color = 'warning text-dark';
                return <span className={`badge bg-${color}`}>{row.status}</span>;
            }
        }
    ];

    return (
        <div className="expiry-compliance-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Expiry & Compliance</h4>
                    <p className="text-muted small">Track warranties, insurance, and licensing schedules.</p>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <Card title="Expiring Documents & Warranties" icon={<FaCalendarTimes />} color="danger">
                        <DataTable
                            columns={columns}
                            data={documentExpiries.sort((a, b) => a.daysRemaining - b.daysRemaining)}
                            actions={['view']}
                        />
                    </Card>
                </div>

                <div className="col-lg-4">
                    <Card title="Notification Settings" icon={<FaBell />} color="primary">
                        <p className="small text-muted mb-4">Set up when you want to receive alerts before a document expires.</p>

                        <div className="mb-4">
                            <label className="form-label small fw-bold text-uppercase">Alert Threshold (Days)</label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control"
                                    value={reminderDays}
                                    onChange={(e) => setReminderDays(e.target.value)}
                                />
                                <span className="input-group-text">days before</span>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2" onClick={() => alert('Reminder settings updated.')}>
                                <FaSave /> Update Settings
                            </button>
                        </div>

                        <hr className="my-4" />

                        <div className="compliance-summary p-3 bg-light rounded">
                            <h6 className="fw-bold small mb-3">CURRENT COMPLIANCE</h6>
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <FaShieldAlt className="text-success fs-4" />
                                <div>
                                    <div className="fw-bold h5 mb-0">92%</div>
                                    <small className="text-muted">Global Compliance Score</small>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Expiry;
