import React from 'react'

export default function Button({ children, rounded = 'default', className }) {
    const roundType = {
        default: 'rounded-lg',
        full: 'rounded-full'
    }[rounded];

    return (
        <button className={`p-2 ${roundType} hover:bg-gray-100 transition flex items-center ${className}`}>{children}</button>
    )
}
