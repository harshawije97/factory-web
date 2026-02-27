import LoginForm from '@/components/auth/login-form'
import React from 'react'

function AuthPage() {
    return (
        <div className='min-h-screen bg-linear-to-b from-[#B8E6D5] to-[#B8E6D5] flex items-center justify-center'>
            <LoginForm />
        </div>
    )
}

export default AuthPage