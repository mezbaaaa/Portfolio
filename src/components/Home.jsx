import { Download, LayoutDashboard, Sparkles } from 'lucide-react';
import React from 'react';
import ShinyText from './Animetions/ShinyText';


const Home = () => {
    return (
        <div id='home' className='pt-50 max-sm:pt-0 max-sm:mt-24 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Let's meet!</button>
            </div>
            <div>
                <p className='text-8xl font-bold bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] bg-clip-text text-transparent mt-8 max-sm:text-4xl max-sm:mt-4'>I'm Tahsinul Islam Mezba! MERN-stack web dev building clean, modern apps.</p>
            </div>

            <div className='mt-6 flex items-center gap-8'>
                <a href="#portfolio"><button className='border py-3 px-6 rounded-3xl cursor-pointer border-[#E4B8BF30] font-bold text-xl flex items-center gap-2 max-sm:py-2 max-sm:px-3 max-sm:text-base max-sm:rounded-2xl max-sm:font-semibold'>My Works <LayoutDashboard className='max-sm:size-4' /></button></a>
                <a
                    href="/CV.pdf"
                    download
                    className="text-xl font-bold flex items-center gap-3 cursor-pointer max-sm:text-base max-sm:font-semibold max-sm:gap-2"
                >
                    <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
                    <Download className="max-sm:size-5" />
                </a>

            </div>
        </div>
    );
};

export default Home;