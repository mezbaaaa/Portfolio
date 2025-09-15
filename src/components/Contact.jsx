import { Sparkles } from 'lucide-react';
import React from 'react';
import ContactForm from './ContactForm';



const Contact = () => {
    return (
        <div id='contact' className='pt-36 max-sm:pt-0 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Contact</button>
            </div>
            <div>
                <p className='text-7xl font-bold bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] bg-clip-text text-transparent mt-6 max-sm:text-3xl max-sm:mt-3'>Let's make something awesome together!</p>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;