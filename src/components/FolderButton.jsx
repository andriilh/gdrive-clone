import { Folder, FolderShared, MoreVert } from '@mui/icons-material';
import React, { createElement } from 'react';

export default function FolderButton({ type = 'default', title }) {
    const btnType = {
        default: Folder,
        shared: FolderShared
    }[type];

    return (
        <button className="md:w-50 relative inline-flex w-full items-center rounded-lg bg-blue-50/80 px-3 py-3 transition hover:bg-blue-600 hover:text-blue-50">
            <div className="w-50 inline-flex md:w-36 lg:w-40">
                {createElement(btnType, { className: 'h-10 w-10' })}
                <span className="ml-2 truncate">{title}</span>
            </div>
            <MoreVert className="absolute right-1 h-10 w-10" />
        </button>
    );
}
