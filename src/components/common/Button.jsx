import React from 'react';

export default function Button({ children, rounded = 'default', className }) {
    const roundType = {
        default: 'rounded-lg',
        full: 'rounded-full'
    }[rounded];

    return (
        <button
            className={`p-1 md:p-2 ${roundType} flex items-center transition hover:bg-gray-100 ${className}`}
        >
            {children}
        </button>
    );
}
