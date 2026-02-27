"use client";

import { Input } from '@base-ui/react';
import React from 'react'
import { Button } from '../ui/button';
import { Calendar } from 'lucide-react';

function SearchBar() {
    return (
        <div className="flex gap-3">
            <div className="flex-1 relative">
                <Input
                    type="text"
                    placeholder="Search workflow data"
                    className="w-full h-12 px-4 bg-[#E8E4F0] border-0 rounded-lg text-gray-700 placeholder:text-gray-600 focus:ring-0 focus:outline-none"
                />
            </div>
            <Button className="h-12 w-12 bg-[#4ADE80] hover:bg-[#3BC970] rounded-lg flex items-center justify-center p-0">
                <Calendar className="w-6 h-6 text-gray-900" />
            </Button>
        </div>
    )
}

export default SearchBar