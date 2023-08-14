import { Storage } from '@mui/icons-material'
import React from 'react'

export default function Sidemenu({ icon, title }) {
    return (
        <div className="hover:bg-blue-50 hover:text-blue-700 cursor-pointer rounded-r-full py-3 px-4 transition-colors">
            {React.createElement(icon, { className: 'w-10 h-10' })} <span className='ml-3'>{title}</span>
        </div>
    )
}
