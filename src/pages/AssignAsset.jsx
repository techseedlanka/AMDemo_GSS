import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { FaUserTag, FaArrowLeft, FaCheckSquare, FaImage, FaUpload } from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';
import { dummyEmployees } from '../data/dummyEmployees';

const AssignAsset = () => {
    const navigate = useNavigate();

    return (
        <div className="assign-asset-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Assign Asset</h4>
                    <p className="text-muted small">Handover an available asset to an employee.</p>
                </div>
                <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back
                </button>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <Card title="Assignment Details" icon={<FaUserTag />}>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label fw-bold small text-uppercase">Select Asset</label>
                                <select className="form-select" required defaultValue="">
                                    <option value="" disabled>Search or select asset...</option>
                                    {dummyAssets.filter(a => a.status === 'Available').map(a => (
                                        <option key={a.id} value={a.id}>{a.assetCode} - {a.brandModel}</option>
                                    ))}
                                </select>
                                <div className="form-text small">Only 'Available' assets are listed here.</div>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label fw-bold small text-uppercase">Select Employee</label>
                                <select className="form-select" required defaultValue="">
                                    <option value="" disabled>Search or select employee...</option>
                                    {dummyEmployees.map(e => (
                                        <option key={e.id} value={e.id}>{e.name} ({e.department})</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Assignment Start Date</label>
                                <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Expected Return Date</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-12">
                                <label className="form-label fw-bold small text-uppercase">Condition at Issue</label>
                                <textarea className="form-control" rows="3" placeholder="Describe the physical condition of the asset..."></textarea>
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label fw-bold small text-uppercase d-flex align-items-center gap-2">
                                    <FaImage className="text-muted" /> Asset Images (Current Condition)
                                </label>
                                <div className="p-4 border border-2 border-dashed rounded text-center bg-light cursor-pointer" style={{ borderStyle: 'dashed' }}>
                                    <FaUpload className="text-muted mb-2 fs-3" />
                                    <p className="small text-muted mb-0">Drag & drop asset photos or <strong>click to browse</strong></p>
                                    <input type="file" className="d-none" multiple />
                                </div>
                            </div>

                            <div className="col-12 mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-light px-4" onClick={() => navigate(-1)}>Cancel</button>
                                <button type="submit" className="btn btn-primary px-5 d-flex align-items-center gap-2" onClick={(e) => {
                                    e.preventDefault();
                                    alert('Asset assigned successfully (Simulated)');
                                    navigate('/assets');
                                }}>
                                    <FaCheckSquare /> Complete Assignment
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm bg-primary text-white mb-4">
                        <div className="card-body p-4 text-center">
                            <FaCheckSquare className="fs-1 mb-3 opacity-50" />
                            <h5 className="fw-bold">Legal Compliance</h5>
                            <p className="small mb-0 opacity-75">All assignments are tracked for audit purposes. Ensure physical documents are uploaded to the Asset Document section after assignment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignAsset;
