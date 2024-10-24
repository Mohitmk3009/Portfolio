import React from 'react'
'use client';

import React from 'react';
import Tilt from 'react-tilt';
const Card = () => {
  return (
    <div><Tilt className="inline-block m-5" options={{ max: 25 }}>
    <div className="bg-gradient-to-r from-gray-200 to-gray-300 border-2 border-blue-500 rounded-lg p-5 text-center shadow-lg transition-transform duration-200">
        <h1 className="text-xl font-bold">{title}</h1>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>Date: {date}</p>
        <p>Issuer: {issuer}</p>
    </div>
</Tilt></div>
  )
}

export default Card