import { Sparkles } from 'lucide-react';
import React from 'react';

const Portfolio = () => {
    return (
        <div id='portfolio' className='mt-36 max-sm:mt-16'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-gray-800 max-sm:text-sm'><Sparkles color='#E4B8BF'   /> Portfolio</button>
            </div>
            <div>
                <p className='text-7xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-6'>Check out my featured projects</p>
            </div>
        </div>
    );
};

export default Portfolio;