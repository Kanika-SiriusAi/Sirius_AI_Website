"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface CommonExpertiseProps {
    title: string;
    subtitle: string;
    points: string[];
    buttonUrl: string;
}

const CommonExpertiseCard: React.FC<CommonExpertiseProps> = ({ title, subtitle, points, buttonUrl }) => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push(buttonUrl);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <h2>Example</h2>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <button onClick={handleButtonClick}>Get Started →</button>
        </div>
    );
}

export default CommonExpertiseCard;
