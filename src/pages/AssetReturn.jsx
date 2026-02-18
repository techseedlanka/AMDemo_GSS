import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { FaUndo, FaArrowLeft, FaExclamationCircle, FaImage, FaUpload } from 'react-icons/fa';
import { dummyAssets } from '../data/dummyAssets';

const AssetReturn = () => {
    const navigate = useNavigate();

    return (
        <div className="asset-return-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold mb-0">Asset Returns</h4>
                    <p className="text-muted small">Process an asset return and assess its condition.</p>
                </div>
                <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                    <FaArrowLeft /> Back
                </button>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <Card title="Return Assessment Form" icon={<FaUndo />}>
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label fw-bold small text-uppercase">Asset to Return</label>
                                <select className="form-select" required defaultValue="">
                                    <option value="" disabled>Select assigned asset...</option>
                                    {dummyAssets.filter(a => a.status === 'Assigned').map(a => (
                                        <option key={a.id} value={a.id}>{a.assetCode} - {a.brandModel} (Out with {a.assignedTo})</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Return Date</label>
                                <input type="date" className="form-control" defaultValue={new Date().toISOString().split('T')[0]} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label fw-bold small text-uppercase">Condition at Return</label>
                                <select className="form-select" required>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Good">Good (Normal Wear)</option>
                                    <option value="Fair">Fair (Needs Cleaning)</option>
                                    <option value="Poor">Poor (Minor Damage)</option>
                                    <option value="Broken">Broken (Major Damage)</option>
                                </select>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label fw-bold small text-uppercase">Status After Return</label>
                                <div className="d-flex gap-3 mt-1">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="postReturnStatus" id="status1" defaultChecked />
                                        <label className="form-check-label small" htmlFor="status1">Reassignable</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="postReturnStatus" id="status2" />
                                        <label className="form-check-label small" htmlFor="status2">Under Repair</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="postReturnStatus" id="status3" />
                                        <label className="form-check-label small" htmlFor="status3">Damaged/Lost</label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label fw-bold small text-uppercase">Remarks / Notes</label>
                                <textarea className="form-control" rows="3" placeholder="Additional details about the return..."></textarea>
                            </div>

                            <div className="col-12 mt-3">
                                <label className="form-label fw-bold small text-uppercase d-flex align-items-center gap-2">
                                    <FaImage className="text-muted" /> Return Condition Images
                                </label>
                                <div className="p-4 border border-2 border-dashed rounded text-center bg-light cursor-pointer" style={{ borderStyle: 'dashed' }}>
                                    <FaUpload className="text-muted mb-2 fs-3" />
                                    <p className="small text-muted mb-0">Upload photos of the asset at the time of return</p>
                                    <input type="file" className="d-none" multiple />
                                </div>
                            </div>

                            <div className="col-12 mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                                <button type="button" className="btn btn-light px-4" onClick={() => navigate(-1)}>Cancel</button>
                                <button type="submit" className="btn btn-dark px-5 d-flex align-items-center gap-2" onClick={(e) => {
                                    e.preventDefault();
                                    alert('Return processed successfully (Simulated)');
                                    navigate('/assets');
                                }}>
                                    <FaUndo /> Process Return
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <div className="alert alert-warning border-0 shadow-sm d-flex gap-3">
                        <FaExclamationCircle className="fs-4 flex-shrink-0" />
                        <div className="small">
                            <h6 className="fw-bold mb-1">Checklist Before Return:</h6>
                            <ul className="ps-3 mb-0">
                                <li>Check for physical damage</li>
                                <li>Verify all accessories present</li>
                                <li>Clear personal user data</li>
                                <li>Update maintenance record if needed</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetReturn;
