import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
<div className='text-red-600 text-bold'> AdminLayout</div>
<div className='flex justify-center text-yellow-900 bg-slate-400 '> <Outlet/> </div>
    </div>
  )
}

export default AdminLayout
