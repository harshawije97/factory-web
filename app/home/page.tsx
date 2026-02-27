import WorkflowList from '@/components/home/workflow-list'
import BottomNavigation from '@/components/shared/bottom-navigation'
import FloatingButton from '@/components/shared/floating-button'
import SearchBar from '@/components/shared/search-bar'
import React from 'react'

function HomePage() {
    const workflows = [
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
        "Workflow 001 - 20/02/2026",
    ]
    return (
        <div className='w-full min-h-screen bg-white flex flex-col'>
            {/* header */}
            <div className="px-4 pt-6 pb-4 space-y-6">
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                    Dashboard
                </div>
                <p className='text-slate-500'>Workflow Summery</p>
                {/* Searchbar and calender */}
                <SearchBar />
            </div>
            {/* body */}
            <WorkflowList workflows={workflows} />
            <FloatingButton />
            {/* footer */}
            <BottomNavigation />
        </div>
    )
}

export default HomePage