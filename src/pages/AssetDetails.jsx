import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import {
    FaArrowLeft,
    FaUserTag,
    FaTools,
    FaTimesCircle,
    FaTrashAlt,
    FaCalendarAlt,
    FaInfoCircle,
    FaShieldAlt,
    FaHistory
} from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';

const AssetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find asset in dummy data
    const asset = useMemo(() => {
        return dummyAssets.find(a => a.id === parseInt(id));
    }, [id]);

    if (!asset) {
        return (
            <div className="text-center py-5">
                <h4>Asset Not Found</h4>
                <button className="btn btn-primary mt-3" onClick={() => navigate('/assets')}>Back to Register</button>
            </div>
        );
    }

    // Mock assignment history
    const assignmentHistory = [
        { employee: 'John Doe', startDate: '2023-01-15', returnDate: '2023-12-30', condition: 'Good' },
        { employee: 'Alice Brown', startDate: '2024-01-05', returnDate: '-', condition: 'Excellent' },
    ];

    // Mock maintenance history
    const maintenanceHistory = [
        { serviceDate: '2023-06-12', type: 'Repair', vendor: 'Dell Support', cost: 150, status: 'Completed' },
    ];

    return (
        <div className="asset-details-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-light" onClick={() => navigate('/assets')}>
                        <FaArrowLeft />
                    </button>
                    <div>
                        <h4 className="fw-bold mb-0">{asset.brandModel}</h4>
                        <span className="text-muted small">Asset ID: {asset.assetCode}</span>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => navigate('/assign-asset')}>
                        <FaUserTag /> Assign
                    </button>
                    <button className="btn btn-outline-warning d-flex align-items-center gap-2">
                        <FaTools /> Repair
                    </button>
                    <button className="btn btn-outline-danger d-flex align-items-center gap-2">
                        <FaTimesCircle /> Lost
                    </button>
                    <button className="btn btn-danger d-flex align-items-center gap-2">
                        <FaTrashAlt /> Decommission
                    </button>
                </div>
            </div>

            <div className="row g-4">
                {/* Main Info */}
                <div className="col-lg-8">
                    <Card title="Asset Specification" icon={<FaInfoCircle />}>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Category</small>
                                <div className="fw-bold">{asset.category}</div>
                            </div>
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Serial Number</small>
                                <div className="fw-bold">{asset.serialNumber}</div>
                            </div>
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Current Status</small>
                                <span className={`badge bg-${asset.status === 'Assigned' ? 'primary' : 'success'}`}>
                                    {asset.status}
                                </span>
                            </div>
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Purchase Date</small>
                                <div className="fw-bold">{asset.purchaseDate}</div>
                            </div>
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Value</small>
                                <div className="fw-bold">${asset.purchaseValue}</div>
                            </div>
                            <div className="col-md-4">
                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Vendor</small>
                                <div className="fw-bold">{asset.vendor}</div>
                            </div>
                        </div>

                        {/* If Vehicle */}
                        {asset.category === 'Vehicle' && (
                            <div className="mt-4 p-3 bg-light border-start border-4 border-primary rounded">
                                <h6 className="fw-bold text-primary mb-3">Vehicle Details</h6>
                                <div className="row g-3">
                                    <div className="col-md-6"><small className="text-muted d-block">Reg No:</small> <strong>{asset.registrationNumber}</strong></div>
                                    <div className="col-md-6"><small className="text-muted d-block">Engine No:</small> <strong>{asset.engineNumber}</strong></div>
                                </div>
                            </div>
                        )}
                    </Card>

                    {/* History Sections */}
                    <div className="mt-4">
                        <Card title="Assignment History" icon={<FaHistory />}>
                            <DataTable
                                columns={[
                                    { label: 'Employee', key: 'employee' },
                                    { label: 'Start Date', key: 'startDate' },
                                    { label: 'Return Date', key: 'returnDate' },
                                    { label: 'Condition', key: 'condition' },
                                ]}
                                data={assignmentHistory}
                            />
                        </Card>
                    </div>

                    <div className="mt-4">
                        <Card title="Maintenance Logs" icon={<FaTools />}>
                            <DataTable
                                columns={[
                                    { label: 'Service Date', key: 'serviceDate' },
                                    { label: 'Type', key: 'type' },
                                    { label: 'Vendor', key: 'vendor' },
                                    { label: 'Cost', key: 'cost', render: (row) => `$${row.cost}` },
                                    { label: 'Status', key: 'status' },
                                ]}
                                data={maintenanceHistory}
                            />
                        </Card>
                    </div>
                </div>

                {/* Sidebar panels */}
                <div className="col-lg-4">
                    <Card title="Warranty & Compliance" icon={<FaShieldAlt />}>
                        <div className="mb-3">
                            <small className="text-muted d-block mb-1">Warranty Expiry</small>
                            <div className="d-flex align-items-center gap-2">
                                <FaCalendarAlt className="text-muted" />
                                <span className="fw-bold">{asset.warrantyExpiry}</span>
                            </div>
                        </div>
                        <hr />
                        {asset.category === 'Vehicle' && (
                            <div className="expiry-alerts">
                                <div className="mb-3">
                                    <small className="text-muted d-block">Insurance Expiry</small>
                                    <strong className="text-danger">{asset.insuranceExpiry}</strong>
                                </div>
                                <div className="mb-3">
                                    <small className="text-muted d-block">Revenue License</small>
                                    <strong>{asset.revenueLicenseExpiry}</strong>
                                </div>
                            </div>
                        )}
                        <div className="p-3 bg-light rounded mt-3">
                            <div className="d-flex align-items-baseline gap-2">
                                <span className="badge rounded-pill bg-success" style={{ width: '10px', height: '10px', padding: 0 }}> </span>
                                <small className="text-muted">Lifecycle Phase: Active In-Use</small>
                            </div>
                        </div>
                    </Card>

                    <Card className="mt-4" title="Current Assignment" icon={<FaUserTag />}>
                        <div className="text-center py-3">
                            {asset.status === 'Assigned' ? (
                                <>
                                    <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-block mb-3">
                                        <FaUserTag className="fs-1 text-primary" />
                                    </div>
                                    <h6 className="fw-bold mb-1">{asset.assignedTo}</h6>
                                    <p className="small text-muted mb-0">Assigned since 2024-01-05</p>
                                </>
                            ) : (
                                <div className="text-muted small">This asset is currently in the warehouse.</div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AssetDetails;
