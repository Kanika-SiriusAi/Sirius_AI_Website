"use client";

import React from 'react'

interface CommonAiImplementionProps {
  title: string,
  subtitle: string
}

const CommonAiImplemention: React.FC<CommonAiImplementionProps> = ({ title, subtitle }) => {


  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>

    </div>
  )
}

export default CommonAiImplemention;