import React from 'react'
import Sidemenu from '../components/layout/Sidemenu'
import { AccessTime, Delete, Diversity2, Star, Storage } from '@mui/icons-material'

export default function Aside() {
    return (
        <aside className="hidden md:flex md:flex-col shadow-lg max-w-6xl w-72 h-screen max-h-screen">
            <div className='py-10 px-4'>
                <span className='text-4xl text-blue-700 font-bold'>Storebox</span>
            </div>
            <div className='text-gray-600 font-medium'>
                <div className="pr-3 flex flex-col gap-2 py-3">
                    <Sidemenu icon={Storage} title='My Storage' />
                    <Sidemenu icon={Diversity2} title='Shared Storage' />
                </div>
                <hr />
                <div className="pr-3 flex flex-col gap-2 py-3">
                    <Sidemenu icon={Storage} title='Shared with me' />
                    <Sidemenu icon={AccessTime} title='Recent' />
                    <Sidemenu icon={Star} title='Stared' />
                    <Sidemenu icon={Delete} title='Trash' />
                </div>
                <hr className='pb-4' />
                <span className='ml-4 mt-8 text-gray-400'>1.4Gb is used</span>
            </div>
        </aside>
    )
}
