import BottomNavigation from '@/components/shared/bottom-navigation'
import FloatingButton from '@/components/shared/floating-button'
import SearchBar from '@/components/shared/search-bar'
import WorkflowBody from '@/components/workflow/workflow-body'
import React from 'react'

function WorkflowPage() {
    return (
        <div className='w-full min-h-screen bg-white flex flex-col'>
            {/* header */}
            <div className="px-4 pt-6 pb-4 space-y-6">
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                    Workflows
                </div>
                <p className='text-slate-500'>Browse all workflows here</p>
                {/* Searchbar and calender */}
                <SearchBar />
            </div>
            {/* body */}
            <div className='w-full h-full flex flex-col gap-y-4 px-4'>
                <section className='w-full flex justify-between items-center'>
                    <p className='text-sm'>workflows of today with date</p>
                    <p className='text-sm'>number of workflows</p>
                </section>
                <WorkflowBody />
            </div>
            <FloatingButton />
            {/* footer */}
            <BottomNavigation />
        </div>
    )
}

export default WorkflowPage