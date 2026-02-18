import React, { useState } from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import { FaTools, FaWrench, FaHistory, FaCarSide } from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';

const Maintenance = () => {
    const [selectedAssetId, setSelectedAssetId] = useState('');

    const selectedAsset = dummyAssets.find(a => a.id === parseInt(selectedAssetId));

    // Mock maintenance data
    const maintenanceRecords = [
        { id: 1, asset: 'LP-001', type: 'Battery Replacement', date: '2023-11-20', vendor: 'Dell Care', cost: 120, status: 'Completed' },
        { id: 2, asset: 'VH-001', type: 'Oil Change', date: '2024-01-10', vendor: 'Toyota Lanka', cost: 85, status: 'Completed', mileage: '15,200 km' },
        { id: 3, asset: 'LP-002', type: 'Screen Repair', date: '2024-02-15', vendor: 'Apple Store', cost: 450, status: 'Pending' },
    ];

    const columns = [
        { label: 'Date', key: 'date' },
        { label: 'Asset Code', key: 'asset' },
        { label: 'Service Type', key: 'type' },
        { label: 'Vendor', key: 'vendor' },
        { label: 'Cost', key: 'cost', render: (row) => `$${row.cost}` },
        {
            label: 'Status',
            key: 'status',
            render: (row) => (
                <span className={`badge bg-${row.status === 'Completed' ? 'success' : 'warning'}`}>
                    {row.status}
                </span>
            )
        },
    ];

    return (
        <div className="maintenance-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Maintenance & Repairs</h4>
                    <p className="text-muted small">Log service records and track repair costs.</p>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-5">
                    <Card title="Log New Maintenance" icon={<FaWrench />}>
                        <form className="row g-3">
                            <div className="col-12">
                                <label className="form-label fw-bold small text-uppercase">Asset</label>
                                <select
                                    className="form-select"
                                    value={selectedAssetId}
                                    onChange={(e) => setSelectedAssetId(e.target.value)}
                                    required
                                >
                                    <option value="">Select asset to service...</option>
                                    {dummyAssets.map(a => (
                                        <option key={a.id} value={a.id}>{a.assetCode} - {a.brandModel}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Service Date</label>
                                <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Service Type</label>
                                <select className="form-select">
                                    <option>Routine Service</option>
                                    <option>Hardware Repair</option>
                                    <option>Software Update</option>
                                    <option>Safety Inspection</option>
                                    <option>Cleaning</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Vendor</label>
                                <input type="text" className="form-control" placeholder="Service provider" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Cost ($)</label>
                                <input type="number" className="form-control" placeholder="0.00" />
                            </div>

                            {selectedAsset?.category === 'Vehicle' && (
                                <div className="col-12">
                                    <label className="form-label fw-bold small text-uppercase"><FaCarSide className="me-2" /> Current Mileage (km)</label>
                                    <input type="text" className="form-control" placeholder="e.g. 24500" />
                                </div>
                            )}

                            <div className="col-12">
                                <label className="form-label fw-bold small text-uppercase">Service Notes</label>
                                <textarea className="form-control" rows="3" placeholder="Work performed details..."></textarea>
                            </div>

                            <div className="col-12 pt-3 border-top">
                                <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2" onClick={(e) => {
                                    e.preventDefault();
                                    alert('Maintenance log saved (Simulated)');
                                }}>
                                    <FaTools /> Save Log
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="col-lg-7">
                    <Card title="Global Maintenance History" icon={<FaHistory />}>
                        <DataTable
                            columns={columns}
                            data={maintenanceRecords}
                            actions={['view']}
                        />
                        <div className="mt-4 p-3 bg-light rounded shadow-sm border">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="small fw-bold text-muted">TOTAL MAINTENANCE COST (YTD)</span>
                                <span className="h5 fw-bold text-primary mb-0">$12,450.00</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
