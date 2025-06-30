import { Sparkles } from 'lucide-react';
import React from 'react';

const Resume = () => {
    return (
        <div id='resume' className='pt-36 max-sm:pt-0 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Resume</button>
            </div>
            <div>
                <p className='text-7xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-6 max-sm:text-3xl max-sm:mt-3'>Education and practical experience</p>
            </div>
            <div>
                <p className='font-bold text-2xl text-[#c6c7d3] mt-9 max-sm:text-base max-sm:mt-5 '>Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.</p>
            </div>
            <div>
                <p className='mt-28 font-bold text-5xl text-[#e9e9f1]'>My education</p>
            </div>
            <div className="divider my-9"></div>
            <div className='grid grid-cols-12 gap-x-10 items-center ml-7'>
                <div className='col-span-2'>
                    <p className='text-base font-medium text-[#c7c6d3] '>2024-2025</p>
                </div>
                <div className='col-span-5 '>
                    <p className='font-bold text-2xl bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent'>MERN stack devlopment</p>
                    <p><span className='text-base text-[#d6d3e2a8]'>Course by</span> <span className='font-bold text-md hover:underline'>Programming Hero</span></p>
                </div>
                <div className='col-span-5'>
                    <p className='font-bold text-md text-[#ddc5c9be]'>I took an intro-level coding course where I learned web development basics by actually building projects</p>
                </div>
            </div>
            <div className="divider my-9"></div>
            <div className='grid grid-cols-12 gap-x-10 items-center ml-7'>
                <div className='col-span-2'>
                    <p className='text-base font-medium text-[#c7c6d3] '>2023-2024</p>
                </div>
                <div className='col-span-5 '>
                    <p className='font-bold text-2xl bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent'>Higher Secondary Certificate</p>
                    <p><span className='text-base text-[#d6d3e2a8]'>From</span> <span className='font-bold text-md hover:underline'>SIC</span></p>
                </div>
                <div className='col-span-5'>
                    <p className='font-bold text-md text-[#ddc5c9be]'>Wrapped up my HSC in science, where I sharpened my problem-solving game — a solid launchpad for my programming journey</p>
                </div>
            </div>
            <div className="divider my-9"></div>
        </div>
    );
};

export default Resume;