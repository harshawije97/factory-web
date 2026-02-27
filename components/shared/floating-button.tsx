"use client";

import React from 'react'
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

function FloatingButton() {
    const route = useRouter();
    const onNavigate = () => {
        route.push("/workflow/new");
    }
    return (
        <>
            <Button className="fixed bottom-18 right-6 h-14 w-14 bg-[#4ADE80] hover:bg-[#3BC970] rounded-full shadow-lg flex items-center justify-center p-0"
                onClick={onNavigate}>
                <Plus className="w-7 h-7 text-gray-900" />
            </Button>
        </>
    )
}

export default FloatingButton