import { Sparkles } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='pt-36 max-sm:pt-0 max-sm:mt-16 max-sm:px-4'>
            <div>
                <button className='flex gap-2 font-semibold text-xl items-center border rounded-3xl px-4 py-1.5 border-[#E4B8BF30] max-sm:text-sm'><Sparkles color='#E4B8BF' className='max-sm:size-4' /> Contact</button>
            </div>
        </div>
    );
};

export default Contact;