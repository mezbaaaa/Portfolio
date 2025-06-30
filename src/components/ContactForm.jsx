import { Send } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef()
    const handleSendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_micg49j',
            'template_s8irnvm',
            form.current,
            '5J16whjDaFEwanKkk'
        )
            .then((result) => {
                console.log('Email sent ✅', result.text);
                alert('Message sent!');
                form.current.reset();
            }, (error) => {
                console.error('Error ❌', error.text);
                alert('Failed to send message.');
            });
    }
    return (
        <div className=" p-8 mt-16 max-sm:mt-10 max-sm:p-4 flex items-center justify-center">
            <form ref={form} onSubmit={handleSendMail} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-10 max-sm:space-y-5 max-sm:gap-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name='user_name'
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl border-[#E4B8BF35] font-bold text-xl focus:border-b-2 border-b-2 focus:border-[#E4B8BF] outline-none py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Company Name"
                            name='company_name'
                            className="w-full bg-transparent border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] placeholder:font-bold placeholder:text-xl font-bold text-xl max-sm:text-base max-sm:placeholder:text-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name='email'
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name='phone'
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <textarea
                        rows="4"
                        placeholder="A Few Words"
                        name='message'
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
    );
};

export default ContactForm;