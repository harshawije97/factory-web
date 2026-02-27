import BottomNavigation from '@/components/shared/bottom-navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function WeightScalePage() {
    return (
        <div className='min-h-screen bg-white'>
            <div className="px-4 pt-6 pb-4 space-y-6">
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                    Leaf Weighing
                </div>
            </div>
            <div className='container mx-auto px-4'>
                <div className="space-y-4 mb-8">
                    {/* Number of Batches */}
                    <div className="w-full h-14 bg-[#E8E8ED] rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-900 tracking-wide">
                            NUMBER OF BATCHES
                        </span>
                    </div>

                    {/* Kilos Weighted */}
                    <div className="w-full h-14 bg-[#E8E8ED] rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-900 tracking-wide">
                            KILOS WEIGHTED
                        </span>
                    </div>

                    {/* Net Weight */}
                    <div className="w-full h-14 bg-[#E8E8ED] rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-900 tracking-wide">
                            NET WEIGHT
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Charged Kilos Section */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-900">
                        Charged Kilos
                    </label>

                    <Input
                        type="text"
                        defaultValue="200.00"
                        className="w-full h-14 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 focus:border-gray-400 focus:ring-0"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <Button className="w-full h-14 bg-[#6B5B95] hover:bg-[#5A4A7F] text-white rounded-full text-base font-medium shadow-md">
                        Submit
                    </Button>
                </div>
            </div>
            {/* footer */}
            <BottomNavigation />
        </div>
    )
}

export default WeightScalePage