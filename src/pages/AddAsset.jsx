import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { FaSave, FaArrowLeft, FaCar, FaInfoCircle } from 'react-icons/fa';

const AddAsset = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');

    const categories = ['Laptop', 'Desktop', 'Phone', 'Vehicle', 'Furniture', 'Other'];
    const statuses = ['Available', 'Assigned', 'Maintenance', 'Lost', 'Decommissioned'];

    return (
        <div className="add-asset-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Add New Asset</h4>
                    <p className="text-muted small">Register a new physical or digital asset into the system.</p>
                </div>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2" onClick={() => navigate('/assets')}>
                    <FaArrowLeft /> Back to Register
                </button>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <Card title="Asset Information" icon={<FaInfoCircle />}>
                        <form className="row g-3">
                            {/* Common Fields */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Asset Category</label>
                                <select
                                    className="form-select"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category...</option>
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Asset Code</label>
                                <input type="text" className="form-control" placeholder="e.g. LP-100" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Serial Number</label>
                                <input type="text" className="form-control" placeholder="Unique OEM Serial" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Brand / Model</label>
                                <input type="text" className="form-control" placeholder="e.g. Dell Latitude 5420" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Purchase Date</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Purchase Value ($)</label>
                                <input type="number" className="form-control" placeholder="0.00" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Warranty Expiry</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Vendor</label>
                                <input type="text" className="form-control" placeholder="Supplier Name" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Status</label>
                                <select className="form-select">
                                    {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            {/* Conditional Vehicle Fields */}
                            {category === 'Vehicle' && (
                                <div className="col-12 mt-4 p-4 bg-light rounded border border-primary border-opacity-25">
                                    <div className="d-flex align-items-center mb-3">
                                        <FaCar className="text-primary me-2" />
                                        <h6 className="mb-0 fw-bold text-primary text-uppercase">Vehicle Specific Details</h6>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">Registration Number</label>
                                            <input type="text" className="form-control" placeholder="ABC-1234" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold small">Engine Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold small">Insurance Expiry</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold small">Revenue License Expiry</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label fw-bold small">Emission Test Expiry</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="col-12 mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-light px-4" onClick={() => navigate('/assets')}>Cancel</button>
                                <button type="submit" className="btn btn-primary px-4 d-flex align-items-center gap-2" onClick={(e) => {
                                    e.preventDefault();
                                    alert('Form submission is disabled in this UI prototype.');
                                }}>
                                    <FaSave /> Save Asset
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <div className="alert alert-info border-0 shadow-sm d-flex gap-3">
                        <FaInfoCircle className="fs-4 flex-shrink-0" />
                        <div>
                            <h6 className="fw-bold">Asset Registration Guide</h6>
                            <p className="small mb-0">Ensure all mandatory fields are filled. Assets registered as 'Available' will be ready for immediate assignment.</p>
                        </div>
                    </div>

                    <div className="card shadow-sm border-0 mt-3 overflow-hidden">
                        <div className="card-body bg-primary text-white p-4">
                            <h6 className="fw-bold mb-1">Asset Lifecycle</h6>
                            <p className="small opacity-75 mb-0">System automatically tracks audit trails for every saved asset once registered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAsset;
