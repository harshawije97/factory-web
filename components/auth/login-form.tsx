"use client";

import React from 'react'
import { Input } from '@base-ui/react';
import { Lock, User } from 'lucide-react';
import { Button } from '../ui/button';

function LoginForm() {
    return (
        <div className="w-full max-w-md fixed bottom-0">
            {/* Card Container */}
            <div className="bg-[#F5F3F7] rounded-t-[40px] pt-8 pb-12 px-6 shadow-lg">
                {/* Header Text */}
                <div className="text-center mb-12">
                    <p className="text-gray-800 text-sm mb-2">Welcome back</p>
                    <h1 className="text-[#6B5B95] text-3xl font-bold leading-tight">
                        Factory App
                        <br />
                        Login
                    </h1>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    {/* Username Input */}
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Username or Email Address"
                            className="w-full h-14 pl-12 pr-4 bg-white border-2 border-gray-300 rounded-xl text-gray-700 placeholder:text-gray-500 focus:border-[#6B5B95] focus:ring-0"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <Input
                            type="password"
                            placeholder="Password"
                            className="w-full h-14 pl-12 pr-4 bg-white border-2 border-gray-300 rounded-xl text-gray-700 placeholder:text-gray-500 focus:border-[#6B5B95] focus:ring-0"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-y-3 mt-8">
                    {/* Sign In Button */}
                    <a href="/home">
                        <Button className="w-full h-14 bg-[#6B5B95] hover:bg-[#5A4A7F] text-white rounded-full text-base font-medium shadow-md">
                            Sign In
                        </Button>
                    </a>

                    {/* Request Access Button */}
                    <Button
                        variant="outline"
                        className="w-full h-14 bg-white hover:bg-gray-50 text-[#6B5B95] border-2 border-[#6B5B95] rounded-full text-base font-medium"
                    >
                        Request Access
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm