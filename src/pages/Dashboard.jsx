import React from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import {
    FaBox,
    FaUserCheck,
    FaTools,
    FaExclamationTriangle,
    FaTimesCircle,
    FaChartLine,
    FaChartPie
} from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';

const Dashboard = () => {
    // Logic to calculate summary stats
    const totalAssets = dummyAssets.length;
    const assignedAssets = dummyAssets.filter(a => a.status === 'Assigned').length;
    const underRepair = dummyAssets.filter(a => a.status === 'Maintenance').length;
    const expiringSoon = 2; // Mocking this value
    const lostDamaged = 0; // Mocking this value

    // Columns for Recent Assignments
    const assignmentColumns = [
        { label: 'Asset Code', key: 'assetCode' },
        { label: 'Asset Name', key: 'brandModel' },
        { label: 'Assigned To', key: 'assignedTo' },
        {
            label: 'Status',
            key: 'status',
            render: (row) => (
                <span className={`badge bg-${row.status === 'Assigned' ? 'primary' : 'secondary'}`}>
                    {row.status}
                </span>
            )
        },
    ];

    // Columns for Upcoming Expiries
    const expiryColumns = [
        { label: 'Asset', key: 'brandModel' },
        { label: 'Document', key: 'docType' },
        { label: 'Expiry Date', key: 'expiryDate' },
        {
            label: 'Days Left',
            key: 'daysLeft',
            render: (row) => (
                <span className={`text-${row.daysLeft < 30 ? 'danger' : 'warning'} fw-bold`}>
                    {row.daysLeft} Days
                </span>
            )
        },
    ];

    // Mock data for expiries
    const dummyExpiries = [
        { brandModel: 'Dell Latitude 5420', docType: 'Warranty', expiryDate: '2026-01-15', daysLeft: 330 },
        { brandModel: 'Toyota Corolla', docType: 'Insurance', expiryDate: '2024-11-10', daysLeft: 12 },
        { brandModel: 'MacBook Pro M2', docType: 'Warranty', expiryDate: '2024-05-20', daysLeft: 45 },
    ];

    return (
        <div className="dashboard-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">System Dashboard</h4>
                    <p className="text-muted small">Welcome back, here's what's happening today.</p>
                </div>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                    <FaBox /> Generate Report
                </button>
            </div>

            {/* Summary Cards */}
            <div className="row g-4 mb-5">
                <div className="col-md-3 col-lg">
                    <Card title="Total Assets" value={totalAssets} icon={<FaBox />} color="primary" subtitle="Owned by company" />
                </div>
                <div className="col-md-3 col-lg">
                    <Card title="Assigned" value={assignedAssets} icon={<FaUserCheck />} color="success" subtitle="Currently in use" />
                </div>
                <div className="col-md-3 col-lg">
                    <Card title="Under Repair" value={underRepair} icon={<FaTools />} color="warning" subtitle="Maintenance mode" />
                </div>
                <div className="col-md-3 col-lg">
                    <Card title="Expiring Soon" value={expiringSoon} icon={<FaExclamationTriangle />} color="danger" subtitle="Action required" />
                </div>
                <div className="col-md-3 col-lg d-none d-xxl-block">
                    <Card title="Lost/Damaged" value={lostDamaged} icon={<FaTimesCircle />} color="secondary" subtitle="Write-off items" />
                </div>
            </div>

            <div className="row g-4">
                {/* Recent Assignments Table */}
                <div className="col-lg-8">
                    <Card title="Recent Assignments" icon={<FaUserCheck />} color="primary">
                        <DataTable
                            columns={assignmentColumns}
                            data={dummyAssets.filter(a => a.status === 'Assigned').slice(0, 5)}
                        />
                    </Card>
                </div>

                {/* Chart Placeholder 1 */}
                <div className="col-lg-4">
                    <Card title="Asset Distribution" icon={<FaChartPie />} color="info">
                        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-light rounded text-muted">
                            <FaChartPie className="fs-1 mb-3 opacity-25" />
                            <p className="small mb-0 italic">Chart Placeholder: Category Wise Breakdown</p>
                        </div>
                    </Card>
                </div>

                {/* Upcoming Expiries Table */}
                <div className="col-lg-6">
                    <Card title="Upcoming Expiries" icon={<FaExclamationTriangle />} color="danger">
                        <DataTable
                            columns={expiryColumns}
                            data={dummyExpiries}
                        />
                    </Card>
                </div>

                {/* Chart Placeholder 2 */}
                <div className="col-lg-6">
                    <Card title="Monthly Maintenance Cost" icon={<FaChartLine />} color="warning">
                        <div className="d-flex flex-column align-items-center justify-content-center py-5 bg-light rounded text-muted">
                            <FaChartLine className="fs-1 mb-3 opacity-25" />
                            <p className="small mb-0 italic">Chart Placeholder: Maintenance Trends</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
