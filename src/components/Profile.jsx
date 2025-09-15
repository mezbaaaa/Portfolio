import React from 'react';
import profileImg from '../assets/devloper photo.jpg';
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Profile = () => {
    return (
        <div className='border rounded-3xl py-8 px-7 max-sm:py-6 max-sm:px-4 border-[#161616] sticky top-17 z-50 mt-4 max-w-sm mx-auto bg-[#161616] '>
            {/* Header Section */}
            <a href="/"><div className='flex items-center gap-4 max-sm:gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-14 h-14 max-sm:w-10 max-sm:h-10' viewBox="0 0 85 85">
                    <defs>
                        <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#CEC4EF" />
                            <stop offset="100%" stopColor="#E4B8BF" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#gradientFill)" d="M51,0H34C15.2,0,0,15.2,0,34v17c0,14.3,8.9,26.6,21.4,31.6c0,0,0,0,0,0l0,0C25.3,84.1,29.5,85,34,85h17
    c6,0,11.7-1.6,16.6-4.3c0.1-0.1,0.2-0.1,0.3-0.2C78.1,74.6,85,63.6,85,51V34C85,15.2,69.8,0,51,0z M83,51c0,10.7-5.3,20.2-13.4,26
    v-2.5v-3.9h3.9v-3.9h-3.9v-3.9h3.9v-3.9h-3.9H67v-3.9V51h-3.9v3.9v3.9h2.6v3.9v3.9v3.9h-3.9h-3.9v3.9h3.9h3.9v3.9v1
    C61.3,81.7,56.3,83,51,83H34c-4.5,0-8.7-0.9-12.6-2.6v-2v-3.9h3.9h3.9v-3.9h-3.9h-3.9v-3.9v-3.9v-3.9H24v-3.9V51h-3.9v3.9v3.9h-2.6
    h-3.9v3.9h3.9v3.9h-3.9v3.9h3.9v3.9v3.9C8.2,72.8,2,62.6,2,51V34C2,16.4,16.4,2,34,2h17c17.6,0,32,14.4,32,32V51z M50.1,54.9H54
    v3.9v3.9h-3.9v-3.9V54.9z M33.1,54.9H37v3.9v3.9h-3.9v-3.9V54.9z M27.9,51H24v-3.9v-3.9v-3.9h3.9v3.9v3.9V51z M31.8,39.3h-3.9v-3.9
    h3.9V39.3z M31.8,43.2v-3.9h3.9v3.9H31.8z M63.1,47.1V51h-3.9v-3.9v-3.9v-3.9h3.9v3.9V47.1z M35.7,47.1v-3.9h3.9h3.9h3.9h3.9v3.9
    h-3.9h-3.9h-3.9H35.7z M59.2,39.3h-3.9v-3.9h3.9V39.3z M55.3,43.2h-3.9v-3.9h3.9V43.2z"/>
                </svg>
                <p className='text-3xl max-sm:text-xl bg-gradient-to-r from-[#CEC4EF] to-[#E9E9F1] bg-clip-text text-transparent font-bold leading-tight'>
                    Tahsinul <br /> Islam Mezba
                </p>
            </div></a>

            {/* Profile Image */}
            <div className='my-6 flex justify-center'>
                <img src={profileImg} alt="Profile" className='rounded-2xl max-sm:w-52 max-sm:h-52 object-cover border border-gray-900 shadow-xl' />
            </div>

            {/* Specialization */}
            <div className='max-sm:text-center'>
                <p className='text-base text-[#C6C7D3]'>Specialization:</p>
                <h2 className='text-[#E4B8BF] font-bold text-xl mt-2 space-y-1'>
                    <p>Front-End Web Developer</p>
                    <p>MERN Stack Enthusiast</p>
                </h2>
            </div>

            {/* Location */}
            <div className='max-sm:text-center mt-4'>
                <p className='text-base text-[#C6C7D3]'>Based in:</p>
                <h2 className='text-[#CEC4EF] font-bold text-xl'>Dhaka, Bangladesh</h2>
            </div>

            {/* Social Icons */}
            <div className='flex items-center justify-center gap-4 mt-6 flex-wrap'>
                <a target='_blank' href="https://www.linkedin.com/in/mezbaaaa/" className='p-3 border rounded-3xl hover:scale-105 transition border-[#E4B8BF30]'><FaLinkedin size={20} /></a>
                <a target='_blank' href="https://github.com/mezbaaaa" className='p-3 border rounded-3xl hover:scale-105 transition border-[#E4B8BF30]'><FaGithub size={20} /></a>
                <a target='_blank' href="https://discord.com/users/mezbaaaa" className='p-3 border rounded-3xl hover:scale-105 transition border-[#E4B8BF30]'><FaDiscord size={20} /></a>
                <a target='_blank' href="https://lnk.ink/nedME" className='p-3 border rounded-3xl hover:scale-105 transition border-[#E4B8BF30]'><FaWhatsapp size={21} /></a>
                <a href="mailto:mezbaaaa@gmail.com" rel="noopener noreferrer" className='p-3 border rounded-3xl hover:scale-105 transition border-[#E4B8BF30]'><Mail /></a>
            </div>

            {/* CTA Button */}
            <div className='mt-6 text-center'>
                <a href="#contact">
                    <button className='font-bold text-lg max-sm:text-base border rounded-3xl py-3 px-6 text-black cursor-pointer bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] hover:opacity-90 transition'>
                        Let's Work Together
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Profile;