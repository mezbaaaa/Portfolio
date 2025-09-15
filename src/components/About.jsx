import { Copy, Download, Sparkles } from 'lucide-react';
import React from 'react';
import { Bounce, toast } from 'react-toastify';

const handleCopy = () => {
    navigator.clipboard.writeText('+8801840913161')
    toast.success('Number copied successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}
const handleEmailCopy=()=>{
    navigator.clipboard.writeText('mezbaaaa@gmail.com')
    toast.success('Email copied successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
}

const About = () => {
    return (
        <div id='about' className='pt-36 max-sm:pt-0 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> About Me</button>
            </div>
            <div>
                <p className='text-6xl font-bold bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] bg-clip-text text-transparent mt-6 max-sm:text-3xl max-sm:mt-3'>Where thoughtful design meets functional code</p>
            </div>
            <div className='flex justify-between mt-15 max-sm:flex-col gap-y-5 max-sm:mt-8'>
                <div className='border px-20 py-5 rounded-[50px] border-[#E4B8BF30] text-center max-sm:rounded-4xl'>
                    <p className='text-7xl font-bold bg-gradient-to-r from-[#bcbad3] to-[#E4B8BF] bg-clip-text text-transparent max-sm:text-6xl'>5+</p>
                    <p className='bg-gradient-to-r from-[#c7c6d3] to-[#bcbad3] bg-clip-text text-transparent font-bold text-xl mt-2 max-sm:text-base'>Happy clients</p>
                </div>
                <div className='border px-20 py-5 rounded-[50px] border-[#E4B8BF30] text-center max-sm:rounded-4xl'>
                    <p className='text-7xl font-bold bg-gradient-to-r from-[#bcbad3] to-[#E4B8BF] bg-clip-text text-transparent max-sm:text-6xl'>1+</p>
                    <p className='bg-gradient-to-r from-[#c7c6d3] to-[#bcbad3] bg-clip-text text-transparent font-bold text-xl mt-2 max-sm:text-base'>Years of experience</p>
                </div>
                <div className='border px-20 py-5 rounded-[50px] border-[#E4B8BF30] text-center max-sm:rounded-4xl'>
                    <p className='text-7xl font-bold bg-gradient-to-r from-[#bcbad3] to-[#E4B8BF] bg-clip-text text-transparent max-sm:text-6xl'>29+</p>
                    <p className='bg-gradient-to-r from-[#bcbad3] to-[#E4B8BF] bg-clip-text text-transparent font-bold text-xl mt-2 max-sm:text-base'>Projects done</p>
                </div>
            </div>
            <div className='grid grid-cols-7 mt-12 gap-10 max-sm:grid-cols-1'>
                <div className='col-span-5 max-sm:text-center'>
                    <p className='font-bold text-2xl ml-4 max-sm:ml-0 max-sm:text-base'>I used to think I was writing code to build things. Now I know—I'm also building myself. Every challenge rewires a little bit of how I think. Every problem solved leaves a trace. And when I read my own code from yesterday, I can't help but wonder: was that really me—or just a version of me who didn't know what I do now?</p><br />
                    <p className='font-bold text-2xl ml-4 max-sm:ml-0 max-sm:text-base'>maybe that's the point—growth isn't loud. It happens quietly, commit by commit, until suddenly you see things clearer. I'm not just learning tools; I'm learning intention. I don't build fast—I build right.</p>
                    <a href="/CV.pdf" download ><button className='flex items-center gap-2 text-black bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] px-10 py-3 rounded-2xl mt-5 font-bold text-xl ml-4 max-sm:mx-auto max-sm:w-max cursor-pointer'>Download CV <Download className='max-sm:size-5' /></button></a>
                </div>
                <div className='col-span-2 space-y-4'>
                    <div>
                        <p className='text-base font-medium text-[#bcbad3]'>Name</p>
                        <h2 className='text-xl font-bold mt-.5 bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] bg-clip-text text-transparent '>Tahsinul Islam Mezba</h2>
                    </div>
                    <div>
                        <p className='text-base font-medium text-[#bcbad3]'>Phone</p>
                        <h2 className='text-xl font-bold flex items-center gap-2 bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent max-sm:text-base'>+8801840913161<Copy onClick={handleCopy} className='cursor-pointer text-white/40 max-sm:size-4' /></h2>
                    </div>
                    <div>
                        <p className='text-base font-medium text-[#bcbad3]'>Email</p>
                        <h2 className='text-xl font-bold flex items-center gap-2 bg-gradient-to-r from-[#E4B8BF] to-[#CEC4EF] bg-clip-text text-transparent max-sm:text-base'>mezbaaaa@gmail.com <Copy onClick={handleEmailCopy} className='cursor-pointer text-white/40 max-sm:size-4'/></h2>
                    </div>
                    <div>
                        <p className='text-base font-medium text-[#bcbad3]'>Location</p>
                        <h2 className='text-xl font-bold mt-.5 text-[#CEC4EF]'>Dhaka,Bangladesh</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;