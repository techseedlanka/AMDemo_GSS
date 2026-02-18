import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import { FaSearch, FaFilter, FaPlus, FaFileExport } from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';

const AssetRegister = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');

    // Filter Logic
    const filteredAssets = dummyAssets.filter(asset => {
        const matchesSearch = asset.brandModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
            asset.assetCode.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || asset.category === categoryFilter;
        const matchesStatus = statusFilter === 'All' || asset.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    const columns = [
        { label: 'Asset Code', key: 'assetCode', width: '10%' },
        { label: 'Category', key: 'category', width: '10%' },
        { label: 'Brand / Model', key: 'brandModel' },
        { label: 'Assigned To', key: 'assignedTo' },
        {
            label: 'Status',
            key: 'status',
            render: (row) => {
                let badgeClass = 'bg-secondary';
                if (row.status === 'Assigned') badgeClass = 'bg-primary';
                if (row.status === 'Available') badgeClass = 'bg-success';
                if (row.status === 'Maintenance') badgeClass = 'bg-warning text-dark';
                if (row.status === 'Lost') badgeClass = 'bg-danger';

                return <span className={`badge ${badgeClass}`}>{row.status}</span>;
            }
        },
        { label: 'Warranty Expiry', key: 'warrantyExpiry' },
    ];

    const handleAction = (type, row) => {
        if (type === 'view') {
            navigate(`/assets/${row.id}`);
        }
    };

    const categories = ['All', ...new Set(dummyAssets.map(a => a.category))];
    const statuses = ['All', 'Available', 'Assigned', 'Maintenance', 'Lost', 'Decommissioned'];

    return (
        <div className="asset-register-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Asset Register</h4>
                    <p className="text-muted small">Manage and track all company hardware and software assets.</p>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                        <FaFileExport /> Export CSS
                    </button>
                    <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => navigate('/add-asset')}>
                        <FaPlus /> Add New Asset
                    </button>
                </div>
            </div>

            {/* Filters */}
            <Card className="mb-4">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                                <FaSearch className="text-muted" />
                            </span>
                            <input
                                type="text"
                                className="form-control border-start-0"
                                placeholder="Search by Code or Model..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white border-end-0">
                                <FaFilter className="text-muted" />
                            </span>
                            <select
                                className="form-select border-start-0"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All Statuses</option>
                            {statuses.filter(s => s !== 'All').map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-light w-100 fw-bold text-primary" onClick={() => {
                            setSearchTerm('');
                            setCategoryFilter('All');
                            setStatusFilter('All');
                        }}>
                            Clear Filters
                        </button>
                    </div>
                </div>
            </Card>

            {/* Data Table */}
            <div className="mt-4">
                <DataTable
                    columns={columns}
                    data={filteredAssets}
                    actions={['view', 'edit']}
                    onAction={handleAction}
                    emptyMessage="No assets found matching your criteria."
                />
            </div>
        </div>
    );
};

export default AssetRegister;
