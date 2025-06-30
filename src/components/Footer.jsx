import { Mail } from 'lucide-react';
import React from 'react';
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-8 mt-6 flex-wrap max-sm:gap-4 max-sm:mt-4'>
                <a target='_blank' href="https://www.linkedin.com/in/mezbaaaa/" className="px-16 py-10 max-sm:px-8 max-sm:py-6 border rounded-[2rem] transition-all duration-300 ease-in-out transform hover:scale-105 border-[#E4B8BF30] text-[#4B4B51] hover:text-white/70 hover:border-[#E4B8BF80]"><FaLinkedin size={60} className='max-sm:size-10' /></a>
                <a target='_blank' href="https://github.com/mezbaaaa" className='px-16 py-10 max-sm:px-8 max-sm:py-6 border rounded-[2rem] transition-all duration-300 ease-in-out transform hover:scale-105 border-[#E4B8BF30] text-[#4B4B51] hover:text-white/70 hover:border-[#E4B8BF80]'><FaGithub size={60} className='max-sm:size-10' /></a>
                <a target='_blank' href="https://discord.com/users/mezbaaaa" className='px-16 py-10 max-sm:px-8 max-sm:py-6 border rounded-[2rem] transition-all duration-300 ease-in-out transform hover:scale-105 border-[#E4B8BF30] text-[#4B4B51] hover:text-white/70 hover:border-[#E4B8BF80]'><FaDiscord size={60} className='max-sm:size-10' /></a>
                <a target='_blank' href="https://lnk.ink/nedME" className='px-16 py-10 max-sm:px-8 max-sm:py-6 border rounded-[2rem] transition-all duration-300 ease-in-out transform hover:scale-105 border-[#E4B8BF30] text-[#4B4B51] hover:text-white/70 hover:border-[#E4B8BF80]'><FaWhatsapp size={60} className='max-sm:size-10' /></a>
                <a href="mailto:mezbaaaa@gmail.com" rel="noopener noreferrer" className='px-16 py-10 max-sm:px-8 max-sm:py-6 border rounded-[2rem] transition-all duration-300 ease-in-out transform hover:scale-105 border-[#E4B8BF30] text-[#4B4B51] hover:text-white/70 hover:border-[#E4B8BF80]'><Mail size={60} className='max-sm:size-10' /></a>
            </div>
            <div>
                <p className='font-bold text-5xl bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] bg-clip-text text-transparent ml-3 mb-80 mt-12 max-sm:text-xl max-sm:mx-4 max-sm:mt-6 max-sm:mb-32'>Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.</p>
            </div>
        </div>
    );
};

export default Footer;