import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Plus, User } from 'lucide-react'
import React from 'react'

function NewWorkflow() {
    return (
        <div className='min-h-screen bg-white'>
            <div className="px-4 pt-6 pb-4 space-y-6">
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                    New Workflow
                </div>
            </div>
            <div className='w-full h-full px-4'>
                <div className="space-y-6">
                    {/* Username/Email Input */}
                    <div>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Username / Email"
                                className="w-full h-14 pl-12 pr-4 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                            Name
                        </label>
                        <Input
                            type="text"
                            placeholder="Enter Workflow Name"
                            className="w-full h-14 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                        />
                    </div>

                    {/* Additional Information Text */}
                    <div className="text-center py-4">
                        <span className="text-[#4ADE80] text-base font-medium">
                            Additional Information
                        </span>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-6">
                        {/* Only admin authorized checkbox - Checked */}
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="admin-authorized"
                                defaultChecked
                                className="h-5 w-5 border-2 border-gray-400 data-[state=checked]:bg-[#6B5B95] data-[state=checked]:border-[#6B5B95]"
                            />
                            <label
                                htmlFor="admin-authorized"
                                className="text-base text-gray-900 cursor-pointer"
                            >
                                Only admin authorized to create sessions
                            </label>
                        </div>

                        {/* Grant permission checkbox - Unchecked */}
                        <div className="flex items-center gap-3">
                            <Checkbox
                                id="grant-permission"
                                className="h-5 w-5 border-2 border-gray-400 data-[state=checked]:bg-[#6B5B95] data-[state=checked]:border-[#6B5B95]"
                            />
                            <label
                                htmlFor="grant-permission"
                                className="text-base text-gray-900 cursor-pointer"
                            >
                                Grant permission to other users
                            </label>
                        </div>
                    </div>

                    {/* Create Workflow Button */}
                    <div className="pt-4">
                        <Button className="w-full h-14 bg-[#6B5B95] hover:bg-[#5A4A7F] text-white rounded-full text-base font-medium shadow-md flex items-center justify-center gap-2">
                            <Plus className="w-5 h-5" />
                            Create Workflow
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWorkflow