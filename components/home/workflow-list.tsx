"use client";

import React from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronRight } from 'lucide-react';

interface WorkflowListProps {
    workflows: string[]
}

function WorkflowList({ workflows }: WorkflowListProps) {
    const [openItems, setOpenItems] = React.useState<{ [key: number]: boolean }>({});

    const toggleItem = (index: number) => {
        setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }))
    }
    return (
        <>
            <div className="px-4 space-y-3 pb-20 pt-10">
                {workflows.slice(0, 4).map((workflow, index) => (
                    <Collapsible
                        key={index}
                        open={openItems[index]}
                        onOpenChange={() => toggleItem(index)}
                    >
                        <CollapsibleTrigger className="w-full">
                            <div className="flex items-center gap-3 bg-[#E8E4F0] rounded-lg px-4 py-4 hover:bg-[#DDD7E8] transition-colors">
                                <ChevronRight
                                    className={`w-5 h-5 text-gray-700 transition-transform ${openItems[index] ? "rotate-90" : ""
                                        }`}
                                />
                                <span className="text-gray-900 font-medium">{workflow}</span>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 bg-[#F5F3F7] rounded-b-lg -mt-1">
                            <p className="text-gray-700 text-sm">I collapsed this one</p>
                        </CollapsibleContent>
                    </Collapsible>
                ))}

                {/* See All Link */}
                <div className="text-center py-3">
                    <button className="text-[#4ADE80] font-medium text-base hover:underline">
                        See All
                    </button>
                </div>

                {/* Remaining Workflows */}
                {workflows.slice(4).map((workflow, index) => (
                    <Collapsible
                        key={index + 4}
                        open={openItems[index + 4]}
                        onOpenChange={() => toggleItem(index + 4)}
                    >
                        <CollapsibleTrigger className="w-full">
                            <div className="flex items-center gap-3 bg-[#E8E4F0] rounded-lg px-4 py-4 hover:bg-[#DDD7E8] transition-colors">
                                <ChevronRight
                                    className={`w-5 h-5 text-gray-700 transition-transform ${openItems[index + 4] ? "rotate-90" : ""
                                        }`}
                                />
                                <span className="text-gray-900 font-medium">{workflow}</span>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 bg-[#F5F3F7] rounded-b-lg -mt-1">
                            <p className="text-gray-700 text-sm">I collapsed this one</p>
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </>
    )
}

export default WorkflowList