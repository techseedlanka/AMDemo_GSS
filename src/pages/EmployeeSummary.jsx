import React, { useState } from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import { FaUser, FaSearch, FaCheckCircle, FaExchangeAlt, FaHistory } from 'react-icons/fa';
import { dummyEmployees } from '../data/dummyEmployees';
import { dummyAssets } from '../data/dummyAssets';

const EmployeeSummary = () => {
    const [selectedEmpId, setSelectedEmpId] = useState('');

    const employee = dummyEmployees.find(e => e.id === parseInt(selectedEmpId));

    // Find assets assigned to this employee
    const currentAssets = employee ? dummyAssets.filter(a => a.assignedTo === employee.name) : [];

    // Mock returned assets
    const returnedAssets = employee ? [
        { assetCode: 'MOU-054', brandModel: 'Logitech Mouse', returnDate: '2023-12-15', condition: 'Good' }
    ] : [];

    const assetColumns = [
        { label: 'Code', key: 'assetCode' },
        { label: 'Description', key: 'brandModel' },
        { label: 'Category', key: 'category' },
        { label: 'Status', key: 'status', render: (row) => <span className="badge bg-primary">{row.status}</span> },
    ];

    const returnedColumns = [
        { label: 'Code', key: 'assetCode' },
        { label: 'Description', key: 'brandModel' },
        { label: 'Return Date', key: 'returnDate' },
        { label: 'Condition', key: 'condition' },
    ];

    return (
        <div className="employee-summary-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Employee Asset Summary</h4>
                    <p className="text-muted small">View asset accountability and handover status for individual employees.</p>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-4">
                    <Card className="h-100">
                        <div className="mb-4">
                            <label className="form-label small fw-bold text-uppercase">Search Employee</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white border-end-0"><FaSearch className="text-muted" /></span>
                                <select
                                    className="form-select border-start-0"
                                    value={selectedEmpId}
                                    onChange={(e) => setSelectedEmpId(e.target.value)}
                                >
                                    <option value="">Select Employee...</option>
                                    {dummyEmployees.map(e => <option key={e.id} value={e.id}>{e.name} - {e.employeeId}</option>)}
                                </select>
                            </div>
                        </div>

                        {employee ? (
                            <div className="employee-info text-center py-4 border-top">
                                <div className="bg-light p-4 rounded-circle d-inline-block mb-3">
                                    <FaUser className="fs-1 text-secondary" />
                                </div>
                                <h5 className="fw-bold mb-1">{employee.name}</h5>
                                <p className="text-muted small mb-3">{employee.designation}<br />{employee.department}</p>

                                <div className="d-flex justify-content-center gap-4 mt-4">
                                    <div className="text-center">
                                        <div className="h4 fw-bold mb-0 text-primary">{currentAssets.length}</div>
                                        <small className="text-muted text-uppercase" style={{ fontSize: '0.65rem' }}>Active</small>
                                    </div>
                                    <div className="vr"></div>
                                    <div className="text-center">
                                        <div className="h4 fw-bold mb-0 text-success">{returnedAssets.length}</div>
                                        <small className="text-muted text-uppercase" style={{ fontSize: '0.65rem' }}>Returned</small>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="p-3 bg-success bg-opacity-10 border border-success border-opacity-25 rounded d-flex align-items-center gap-3">
                                    <FaCheckCircle className="text-success fs-4" />
                                    <div className="text-start">
                                        <div className="fw-bold small text-success">Clearance Status</div>
                                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>No pending returns required.</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-5 text-muted opacity-50">
                                <FaUser className="fs-1 mb-3" />
                                <p>Select an employee to view their summary.</p>
                            </div>
                        )}
                    </Card>
                </div>

                <div className="col-lg-8">
                    <div className="row g-4">
                        <div className="col-12">
                            <Card title="Currently Assigned Assets" icon={<FaExchangeAlt />} color="primary">
                                <DataTable
                                    columns={assetColumns}
                                    data={currentAssets}
                                    emptyMessage="No assets currently assigned to this employee."
                                />
                            </Card>
                        </div>
                        <div className="col-12">
                            <Card title="Returned Asset History" icon={<FaHistory />} color="secondary">
                                <DataTable
                                    columns={returnedColumns}
                                    data={returnedAssets}
                                    emptyMessage="No return history found."
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeSummary;
