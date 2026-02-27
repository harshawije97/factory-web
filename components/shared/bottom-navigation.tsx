"use client";

import { BookIcon, Home, Network, Weight } from 'lucide-react';
import React from 'react'

function BottomNavigation() {
    return (
        <>
            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#E8E4EC] border-t border-gray-300 h-12 flex items-center justify-around px-4">
                <a href="/home">
                    <button className="flex flex-col items-center justify-center">
                        <Home className="size-5 text-gray-900" />
                    </button></a>
                <a href="/weight-scale">
                    <button className="flex flex-col items-center justify-center">
                        <Weight className="size-5 text-gray-900" />
                    </button>
                </a>
                <a href="/workflow">
                    <button className="flex flex-col items-center justify-center">
                        <Network className="size-5 text-gray-900" />
                    </button>
                </a>
                <a href="/records">
                    <button className="flex flex-col items-center justify-center">
                        <BookIcon className="size-5 text-gray-900" />
                    </button>
                </a>
            </div>
        </>
    )
}

export default BottomNavigation