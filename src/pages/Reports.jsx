import React, { useState } from 'react';
import Card from '../components/Card';
import { FaFileAlt, FaFileContract, FaTools, FaTrashAlt, FaDownload } from 'react-icons/fa';

const Reports = () => {
    const [activeReport, setActiveReport] = useState(null);

    const reportTypes = [
        { id: 'register', title: 'Asset Register Report', icon: <FaFileAlt />, description: 'Full list of all registered company assets with current status.' },
        { id: 'expiry', title: 'Compliance & Expiry Report', icon: <FaFileContract />, description: 'Detailed list of upcoming document expiries and warranty dates.' },
        { id: 'maintenance', title: 'Maintenance Summary', icon: <FaTools />, description: 'Historical maintenance logs and total repair cost analysis.' },
        { id: 'disposal', title: 'Disposal & Disposal Summary', icon: <FaTrashAlt />, description: 'List of decommissioned assets and recovery value.' },
    ];

    return (
        <div className="reports-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">System Reports</h4>
                    <p className="text-muted small">Generated summaries and audit logs for business analysis.</p>
                </div>
            </div>

            <div className="row g-4 mb-5">
                {reportTypes.map((report) => (
                    <div className="col-md-3" key={report.id}>
                        <div
                            className={`card h-100 cursor-pointer border-0 shadow-sm transition-all ${activeReport === report.id ? 'border border-primary border-opacity-50 bg-primary bg-opacity-10' : ''}`}
                            onClick={() => setActiveReport(report.id)}
                        >
                            <div className="card-body p-4 text-center">
                                <div className={`mb-3 fs-3 ${activeReport === report.id ? 'text-primary' : 'text-muted'}`}>
                                    {report.icon}
                                </div>
                                <h6 className="fw-bold mb-2">{report.title}</h6>
                                <p className="small text-muted mb-0">{report.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Card title={activeReport ? reportTypes.find(r => r.id === activeReport).title : "Generated Report View"} icon={<FaFileAlt />}>
                {activeReport ? (
                    <div className="report-content">
                        <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded">
                            <div className="small text-muted">
                                Showing <strong>124</strong> records for <strong>February 2026</strong>
                            </div>
                            <button className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2">
                                <FaDownload /> Download PDF/CSV
                            </button>
                        </div>

                        {/* Placeholder Table */}
                        <div className="table-responsive">
                            <table className="table table-sm table-striped small border border-light">
                                <thead className="table-light">
                                    <tr>
                                        <th>Record ID</th>
                                        <th>Detail A</th>
                                        <th>Detail B</th>
                                        <th>Detail C</th>
                                        <th>Status</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <tr key={i}>
                                            <td>#{Math.floor(Math.random() * 9000) + 1000}</td>
                                            <td>Sample Data Item {i}</td>
                                            <td>Variable Category</td>
                                            <td>2024-0{i}-15</td>
                                            <td><span className="badge bg-light text-dark border">Verified</span></td>
                                            <td className="fw-bold fw-mono text-end">${(Math.random() * 500).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="text-center py-4 text-muted small italic">
                                (Historical audit data truncated for preview...)
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-5 text-muted opacity-50">
                        <FaFileAlt className="fs-1 mb-3" />
                        <p>Select a report category from above to generate a preview table.</p>
                    </div>
                )}
            </Card>
        </div>
    );
};

export default Reports;
