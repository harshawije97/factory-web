"use client";

import React from 'react'
import SessionEvent from './session-event';
import { Button } from '../ui/button';
import { Paperclip } from 'lucide-react';


interface SessionCardProps {
    title: string
}

interface SessionBodyProps {
    children: React.ReactNode
}

function SessionCard({ title }: SessionCardProps) {
    return (
        <div className="w-full border border-dashed p-3 rounded-md bg-muted">
            <header className='w-full flex justify-between items-center mb-6'>
                <p className="text-base">{title}</p>
                <Button size="xs" className='bg-green-200 text-green-600 font-semibold'>
                    <Paperclip />
                    Summery
                </Button>
            </header>
            <div className="w-full flex flex-col gap-y-3">
                <SessionBody>
                    <SessionEvent name='Withering' />
                    <SessionEvent name='Rolling' />
                    <SessionEvent name='Rotervane' />
                    <SessionEvent name='Bedding' />
                </SessionBody>
                <Button size="xs">Save & Continue</Button>
            </div>
        </div>
    )
}

function SessionBody({ children }: SessionBodyProps) {
    return (
        <div className="w-full flex flex-col gap-y-3">
            {children}
        </div>
    )
}

export default SessionCard