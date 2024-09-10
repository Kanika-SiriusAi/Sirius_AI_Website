"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

interface CommonServiceCardProps {
    title: string,
    subtitle: string,
    buttonUrl: string
}

const CommonServiceCard: React.FC<CommonServiceCardProps> = ({ title, subtitle, buttonUrl }) => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push(buttonUrl);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button onClick={handleButtonClick}>Know More-></button>

        </div>
    )
}

export default CommonServiceCard