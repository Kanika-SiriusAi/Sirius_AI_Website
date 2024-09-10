"use client";

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { StaticImageData } from 'next/image';

interface CommonServiceCardProps {
    title: string,
    subtitle: string,
    descripton: string,
    imgSrc: StaticImageData,
    imgAlt: string,
    buttonUrl: string
}

const CommonServiceCard: React.FC<CommonServiceCardProps> = ({ title, subtitle, descripton, imgSrc, imgAlt, buttonUrl }) => {

    const router = useRouter();

    const handleButtonClick = () => {
        router.push(buttonUrl);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{descripton}</p>
            <Image src={imgSrc}
                alt={imgAlt}
                width={100}
                height={100}
            />
            <button onClick={handleButtonClick}>Know More-></button>

        </div>
    )
}

export default CommonServiceCard

