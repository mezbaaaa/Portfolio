import { Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react';


const Resume = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('/tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
            .catch(error => console.log('data feaching error', error))
    }, [])

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
            {/* education section */}
            <div>
                <p className='mt-28 font-bold text-5xl text-[#e9e9f1] max-sm:mt-12 max-sm:text-3xl'>My education</p>
            </div>
            <div className="divider my-9 max-sm:my-5"></div>
            <div className='grid grid-cols-12 gap-x-10 items-center ml-7 max-sm:grid-cols-1 max-sm:ml-0 max-sm:space-y-4'>
                <div className='col-span-2'>
                    <p className='text-base font-medium text-[#c7c6d3] '>2024-2025</p>
                </div>
                <div className='col-span-5 max-sm:space-y-2 '>
                    <p className='font-bold text-2xl bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent'>MERN stack devlopment</p>
                    <p><span className='text-base text-[#d6d3e2a8]'>Course by</span> <span className='font-bold text-md hover:underline'>Programming Hero</span></p>
                </div>
                <div className='col-span-5'>
                    <p className='font-bold text-md text-[#ddc5c9be]'>I took an intro-level coding course where I learned web development basics by actually building projects</p>
                </div>
            </div>
            <div className="divider my-9 max-sm:my-5"></div>
            <div className='grid grid-cols-12 gap-x-10 items-center ml-7 max-sm:grid-cols-1 max-sm:ml-0 max-sm:space-y-4'>
                <div className='col-span-2'>
                    <p className='text-base font-medium text-[#c7c6d3] '>2023-2024</p>
                </div>
                <div className='col-span-5 max-sm:space-y-2'>
                    <p className='font-bold text-2xl bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent'>Higher Secondary Certificate</p>
                    <p><span className='text-base text-[#d6d3e2a8]'>From</span> <span className='font-bold text-md hover:underline'>SIC</span></p>
                </div>
                <div className='col-span-5'>
                    <p className='font-bold text-md text-[#ddc5c9be]'>Wrapped up my HSC in science, where I sharpened my problem-solving game — a solid launchpad for my programming journey</p>
                </div>
            </div>
            <div className="divider my-9"></div>
            {/* fev tools */}
            <div>
                <div>
                    <p className='mt-28 font-bold text-5xl text-[#e9e9f1] max-sm:mt-12 max-sm:text-3xl'>My Skills</p>
                </div>
                <div className="flex flex-wrap justify-start max-sm:justify-center gap-6 mt-10 ml-5 max-sm:ml-0 max-sm:mt-8">
                    {
                        tools.map((tool, index) => (
                            <div
                                key={index}
                                className="w-[140px] h-[140px] border border-[#CEC4EF30] rounded-4xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
                            >
                                <img
                                    src={tool.icon}
                                    alt={tool.name}
                                    className="w-10 h-10 mb-2"
                                />
                                <p className="bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent font-bold">{tool.name}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Resume;