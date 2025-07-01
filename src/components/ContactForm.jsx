import { Send } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";

const ContactForm = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});

    const handleSendMail = (e) => {
        e.preventDefault();
        const formEl = form.current;
        const formData = {
            user_name: formEl.user_name.value.trim(),
            email: formEl.email.value.trim(),
            phone: formEl.phone.value.trim(),
            message: formEl.message.value.trim(),
        };

        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        Object.entries(formData).forEach(([key, value]) => {
            if (!value) newErrors[key] = `${key.replace('_', ' ')} is required.`;
        });

        if (formData.email && !emailPattern.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
    }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        emailjs.sendForm(
            'service_micg49j',
            'template_s8irnvm',
            form.current,
            '5J16whjDaFEwanKkk'
        )
            .then((result) => {
                console.log('Email sent ✅', result.text);
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
                form.current.reset();
            }, (error) => {
                console.error('Error ❌', error.text);
                toast.error('Error sending email. Try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };
    return (
        <div className=" p-8 mt-16 max-sm:mt-10 max-sm:p-4 flex items-center justify-center">
            <form ref={form} onSubmit={handleSendMail} noValidate className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 space-y-10 max-sm:space-y-5 max-sm:gap-5">
                    <div>
                        <input
                            type="text"
                            required
                            placeholder="Your Name"
                            name="user_name"
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl border-[#E4B8BF35] font-bold text-xl focus:border-b-2 border-b-2 focus:border-[#E4B8BF] outline-none py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                        {errors.user_name && <p className="text-red-400 text-sm mt-1">{errors.user_name}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Company Name (optional) "
                            name="company_name"
                            className="w-full bg-transparent border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] placeholder:font-bold placeholder:text-xl font-bold text-xl max-sm:text-base max-sm:placeholder:text-lg"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            required
                            placeholder="Email Address"
                            name="email"
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            name="phone"
                            className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg"
                        />
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <textarea
                        rows="4"
                        placeholder="A Few Words"
                        required
                        name="message"
                        className="w-full bg-transparent placeholder:font-bold placeholder:text-xl font-bold text-xl border-[#E4B8BF35] outline-none focus:border-b-2 border-b-2 focus:border-[#E4B8BF] py-2 text-gray-100 placeholder-[#CEC4EF50] max-sm:text-base max-sm:placeholder:text-lg resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
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
