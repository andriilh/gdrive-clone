import {
    GridViewRounded,
    HelpCenterOutlined,
    HelpOutlineRounded,
    Search,
    Settings,
    Tune
} from '@mui/icons-material';
import React from 'react';

export default function Nav() {
    return (
        <nav className="sticky top-0 flex h-fit w-screen items-center justify-between px-3 py-3">
            <div className="cursor-pointer rounded-full p-1.5 transition-colors hover:bg-gray-100 hover:text-gray-700 md:hidden">
                <Search className="h-10 w-10" />
            </div>
            <div className="relative hidden w-[36rem] items-center md:flex">
                <div className="absolute left-2 cursor-pointer rounded-full p-1.5 transition-colors hover:bg-gray-100 hover:text-gray-700">
                    <Search className="h-10 w-10" />
                </div>
                <input
                    type="text"
                    className="focus: w-full rounded-full bg-gray-100 px-12 py-3 transition focus:bg-white focus:shadow-md focus:outline-none"
                    placeholder="Search your file"
                />
                <div className="absolute right-2 cursor-pointer rounded-full p-1.5 transition-colors hover:bg-gray-100 hover:text-gray-700">
                    <Tune className="h-10 w-10" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex cursor-pointer items-center rounded-full p-2 transition hover:bg-blue-100 hover:text-blue-600">
                    <HelpOutlineRounded className="h-10 w-10" />
                </div>
                <div className="flex cursor-pointer items-center rounded-full p-2 transition hover:bg-gray-200 hover:text-gray-600">
                    <Settings className="h-10 w-10" />
                </div>
                <div className="flex cursor-pointer items-center rounded-full p-2 transition hover:bg-gray-200 hover:text-gray-600">
                    <GridViewRounded className="h-10 w-10" />
                </div>
                <div className="relative h-8 w-8 cursor-pointer rounded-full bg-stone-500 text-center text-white transition hover:ring-4 hover:ring-gray-200">
                    <span className="text-2xl">A</span>
                </div>
            </div>
        </nav>
    );
}
