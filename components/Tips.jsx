import React from 'react'
import TipsIcon from './TipsIcon'

export default function Tips() {

    //Add Icon to the tips
    return (
        <div className='flex flex-row text-center w-auto h-auto mt-14 items-center justify-center'>
            <TipsIcon />
            <h3 className=' text-[#A716FF] text-md'>Reload the page to see another fact!</h3>
        </div>)
}
