import { Storage } from '@mui/icons-material';
import React from 'react';

export default function Sidemenu({ icon, title }) {
    return (
        <div className="cursor-pointer rounded-r-full px-4 py-2 transition-colors hover:bg-blue-600 hover:text-blue-50">
            {React.createElement(icon, { className: 'w-10 h-10' })}{' '}
            <span className="ml-3">{title}</span>
        </div>
    );
}
