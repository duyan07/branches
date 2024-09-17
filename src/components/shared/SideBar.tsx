import React from 'react'

import BranchIcon from '@/components/ui/BranchIcon';

export default function SideBar() {
  return (
    <div className="flex w-1/12 justify-center text-center bg-green-800">
      <div>
        <div className="bg-green-600">
          <button className="block mx-auto size-16 rounded-full border border-black bg-white">Home</button>
        </div>
        <BranchIcon />
        <BranchIcon />
        <BranchIcon />
        <button className="block mx-auto size-16 rounded-full border border-black bg-white">+</button>
      </div>
      <div className="w-3 bg-green-600"></div>
    </div>
  )
}
