import { Download, LayoutDashboard, Sparkles } from 'lucide-react';
import React from 'react';

const Home = () => {
    return (
        <div className='mt-50'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-gray-800'><Sparkles color='#E4B8BF' /> Let's meet!</button>
            </div>
            <div>
                <p className='text-8xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-8 '>I’m Tahsinul Islam Mezba! Full-stack web dev building clean, modern apps.</p>
            </div>
            <div className='mt-6 flex items-center gap-8'>
                <a href=""><button className='border py-3 px-6 rounded-3xl cursor-pointer border-gray-700 font-bold text-xl flex items-center gap-2'>My Works <LayoutDashboard /></button></a>
                <a href="" download ><button className='text-xl font-bold flex items-center gap-3 cursor-pointer '>Download CV <Download /></button></a>
            </div>
        </div>
    );
};

export default Home;