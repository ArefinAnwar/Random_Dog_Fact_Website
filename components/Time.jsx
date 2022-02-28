import React from 'react'

export default function Time() {

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
    return (
        <div className='text-4xl font-medium mt-14 text-[#FF7E7E]'>{time}</div>
    )
}
