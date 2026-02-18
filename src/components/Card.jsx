import React from 'react';

const Card = ({ title, value, icon, color, subtitle, children }) => {
    // If children are provided, render a standard card with content
    if (children) {
        return (
            <div className="card h-100">
                {(title || icon) && (
                    <div className="card-header bg-white border-0 pt-4 px-4 d-flex align-items-center justify-content-between">
                        {title && <h6 className="card-title mb-0 text-muted fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>{title}</h6>}
                        {icon && <span className={`text-${color || 'primary'} fs-4`}>{icon}</span>}
                    </div>
                )}
                <div className="card-body px-4 pb-4">
                    {children}
                </div>
            </div>
        );
    }

    // Otherwise, render a summary card (used for dashboards)
    return (
        <div className="card border-start border-4 border shadow-sm h-100" style={{ borderLeftColor: `var(--bs-${color || 'primary'}) !important` }}>
            <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                        <h6 className="text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>{title}</h6>
                        <h3 className="fw-bold mb-0">{value}</h3>
                    </div>
                    <div className={`bg-${color || 'primary'} bg-opacity-10 p-3 rounded-circle text-${color || 'primary'} fs-3 d-flex align-items-center justify-content-center`} style={{ width: '60px', height: '60px' }}>
                        {icon}
                    </div>
                </div>
                {subtitle && (
                    <div className="mt-2">
                        <span className="text-muted small">{subtitle}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
