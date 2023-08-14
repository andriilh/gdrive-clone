import { GridViewRounded, HelpCenterOutlined, HelpOutlineRounded, Search, Settings, Tune } from '@mui/icons-material'
import React from 'react'

export default function Nav() {
    return (
        <nav className='flex justify-between items-center w-screen h-fit md:w-[calc(100vw-18rem)] py-3'>
            <div className='flex relative w-[36rem] items-center'>
                <div className="absolute left-2 hover:bg-gray-100 hover:text-gray-700 rounded-full p-1.5 cursor-pointer transition-colors">
                    <Search className='w-10 h-10' />
                </div>
                <input type="text" className='bg-gray-100 w-full py-3 px-12 transition rounded-full focus:outline-none focus:shadow-md focus:bg-white focus:' placeholder='Search your file' />
                <div className="absolute right-2 hover:bg-gray-100 hover:text-gray-700 rounded-full p-1.5 cursor-pointer transition-colors">
                    <Tune className='w-10 h-10' />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='p-2 cursor-pointer hover:bg-blue-100 hover:text-blue-600 rounded-full transition flex items-center'><HelpOutlineRounded className='h-10 w-10' /></div>
                <div className='p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-full transition flex items-center'><Settings className='h-10 w-10' /></div>
                <div className='p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-full transition flex items-center'><GridViewRounded className='h-10 w-10' /></div>
                <div className='w-8 h-8 bg-stone-500 rounded-full hover:ring-4 hover:ring-gray-200 cursor-pointer transition text-white relative text-center'><span className='text-2xl'>A</span></div>
            </div>
        </nav>
    )
}
