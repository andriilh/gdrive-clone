import React from 'react';
import Sidemenu from '../components/layout/Sidemenu';
import {
    AccessTime,
    Delete,
    Diversity2,
    PeopleAlt,
    Star,
    Storage
} from '@mui/icons-material';

export default function Aside() {
    const usage = 2.3;
    const progress = (usage / 15) * 100;
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform md:translate-x-0">
            <div className="px-4 py-10">
                <span className="text-4xl font-bold text-blue-700">
                    Storebox
                </span>
            </div>
            <div className="font-medium text-gray-600">
                <div className="flex flex-col gap-1 py-3 pr-3">
                    <Sidemenu icon={Storage} title="My Storage" />
                    <Sidemenu icon={Diversity2} title="Shared Storage" />
                </div>
                <hr />
                <div className="flex flex-col gap-1 py-3 pr-3">
                    <Sidemenu icon={PeopleAlt} title="Shared with me" />
                    <Sidemenu icon={AccessTime} title="Recent" />
                    <Sidemenu icon={Star} title="Stared" />
                    <Sidemenu icon={Delete} title="Trash" />
                </div>
                <hr />
                <div className="mx-4">
                    <label
                        htmlFor="progress"
                        className="mt-8 flex justify-between text-gray-400"
                    >
                        {usage}Gb is used <span>{Math.round(progress)}%</span>
                    </label>
                    <progress
                        id="progress"
                        className="h-1.5 w-full rounded-full"
                        value={progress}
                        max={100}
                    />
                </div>
            </div>
        </aside>
    );
}
