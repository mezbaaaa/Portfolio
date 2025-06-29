import { Eye, Sparkles, SquareArrowOutUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';




const Portfolio = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('../../public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.log('data feaching error', error))
    }, [])

    const handleViewDetails=()=>{
        alert('hello')
    }

    return (
        <div id='portfolio' className='mt-36 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-gray-800 max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Portfolio</button>
            </div>
            <div>
                <p className='text-7xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-6 max-sm:text-3xl max-sm:mt-3'>Check out my featured projects</p>
            </div>
            <div className='mt-8 grid grid-cols-2 gap-5 '>
                {
                    projects.map((project) => <div key={project.id}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-[563px] h-[360px] object-cover" />
                            <div className="absolute inset-0  backdrop-blur-md"></div>

                            {/* Project Title */}
                            <div className="absolute top-5 bg-white/20 py-2 px-2 rounded-xl left-3 flex flex-wrap gap-2 z-10 text-black text-xl font-bold">
                                {project.title}
                            </div>

                            {/* Tags */}
                            <p className="absolute top-20 left-4 text-white text-xl font-semibold z-10 drop-shadow flex flex-wrap">
                                {project.tags.map((tag, index) => {
                                    const colors = [
                                        { bg: '#be123c30', text: '#be123c' },
                                        { bg: '#1e40af30', text: '#1e40af' },
                                        { bg: '#ca8a0430', text: '#ca8a04' },
                                        { bg: '#15803d30', text: '#15803d' },
                                        { bg: '#7e22ce30', text: '#7e22ce' },
                                        { bg: '#0f766e30', text: '#0f766e' },
                                        { bg: '#4338ca30', text: '#4338ca' },
                                        { bg: '#9333ea30', text: '#9333ea' }
                                    ];
                                    const random = colors[index % colors.length];

                                    return (
                                        <span
                                            key={index}
                                            className=" badge-soft text-sm font-semibold rounded-xl ml-2 px-2 py-1.5"
                                            style={{ backgroundColor: random.bg, color: random.text }}
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </p>
                            <div className="absolute bottom-8 left-14 flex gap-4">
                                {project.buttons.live && (
                                    <a href={project.buttons.live} target="_blank" rel="noopener noreferrer">
                                        <button className="cursor-pointer py-4 px-6 rounded-2xl flex gap-2.5 text-xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] text-black">
                                            View Live <SquareArrowOutUpRight />
                                        </button>
                                    </a>
                                )}

                                <button onClick={handleViewDetails} className="cursor-pointer py-4 px-6 rounded-2xl flex gap-1.5 text-xl font-bold shadow-2xl text-black/80 bg-white/50  items-center "><FaEye />View Details</button>
                            </div>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;