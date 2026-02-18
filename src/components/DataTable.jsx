import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const DataTable = ({ columns, data, actions, onAction, emptyMessage }) => {
    if (!data || data.length === 0) {
        return (
            <div className="text-center py-5 border rounded bg-white mt-3">
                <p className="text-muted mb-0">{emptyMessage || 'No records found.'}</p>
            </div>
        );
    }

    return (
        <div className="table-responsive bg-white rounded shadow-sm">
            <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="py-3 px-4 text-nowrap" style={{ width: col.width || 'auto' }}>
                                {col.label}
                            </th>
                        ))}
                        {actions && <th className="py-3 px-4 text-end">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex} className="py-3 px-4 text-nowrap">
                                    {col.render ? col.render(row) : row[col.key]}
                                </td>
                            ))}
                            {actions && (
                                <td className="py-3 px-4 text-end">
                                    <div className="btn-group btn-group-sm">
                                        {actions.includes('view') && (
                                            <button
                                                className="btn btn-outline-primary border-0"
                                                title="View Details"
                                                onClick={() => onAction && onAction('view', row)}
                                            >
                                                <FaEye />
                                            </button>
                                        )}
                                        {actions.includes('edit') && (
                                            <button
                                                className="btn btn-outline-secondary border-0"
                                                title="Edit"
                                                onClick={() => onAction && onAction('edit', row)}
                                            >
                                                <FaEdit />
                                            </button>
                                        )}
                                        {actions.includes('delete') && (
                                            <button
                                                className="btn btn-outline-danger border-0"
                                                title="Delete"
                                                onClick={() => onAction && onAction('delete', row)}
                                            >
                                                <FaTrash />
                                            </button>
                                        )}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
