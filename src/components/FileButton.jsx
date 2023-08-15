import { MoreVert, PictureAsPdf } from '@mui/icons-material';
import { createElement } from 'react';
import defaultpict from './../assets/default.png';

export default function FileButton({ title, type = 'pdf' }) {
    const fileType = {
        pdf: PictureAsPdf
    }[type];

    return (
        <button className="relative flex w-full flex-col rounded-lg bg-blue-50/80 px-3 py-2 transition hover:bg-blue-600 hover:text-blue-50 md:w-48">
            <div className="inline-flex w-40 items-center">
                <div className="inline-flex items-center md:w-36 lg:w-40">
                    {createElement(fileType, { className: 'h-10 w-10' })}
                    <span className="ml-2 truncate">{title + '.' + type}</span>
                </div>
                <MoreVert className="absolute right-1 h-10 w-10" />
            </div>
            <div className="mt-2 hidden aspect-square overflow-hidden rounded bg-center md:block">
                <img
                    src={defaultpict}
                    alt="document"
                    className="h-full w-full object-cover"
                />
            </div>
        </button>
    );
}
