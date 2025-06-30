import { Send, Sparkles } from 'lucide-react';
import React from 'react';

const handleSendMail=(e)=>{
    e.preventDefault()
    alert('under construction')
}

const Contact = () => {
    return (
        <div id='contact' className='pt-36 max-sm:pt-0 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Contact</button>
            </div>
            <div>
                <p className='text-7xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-6 max-sm:text-3xl max-sm:mt-3'>Let's make something awesome together!</p>
            </div>
            <div className=" p-8 mt-16 max-sm:mt-10 max-sm:p-4 flex items-center justify-center">
                <form onSubmit={handleSendMail} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-10 max-sm:space-y-5 max-sm:gap-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent placeholder:font-bold placeholder:text-xl border-[#E4B8BF35] font-bold text-xl focus:border-b-2 border-b-2 focus:border-[#E4B8BF] outline-none py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full bg-transparent border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] placeholder:font-bold placeholder:text-xl font-bold text-xl max-sm:text-base max-sm:placeholder:text-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <textarea
                            rows="4"
                            placeholder="A Few Words"
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg resize-none"
                        />
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] text-black py-2 px-6 rounded-full shadow-md hover:opacity-90 transition-all flex items-center gap-2 text-2xl font-bold cursor-pointer max-sm:text-xl"
                        >
                            Send Message <Send />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;