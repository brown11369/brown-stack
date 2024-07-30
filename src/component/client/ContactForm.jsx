"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm=() =>{
    let form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.EJS_SERVICE_ID, process.env.EJS_TEMPLATE_ID, form.current, process.env.EJS_PUBLIC_KEY)
            .then((res) => {
                toast("Your message Send...")
                form.current.reset();
            })
            .catch((err) => {
                toast("error please try again later...")
                form.current.reset();
            })
    }
    return (
        <div className="lg:basis-1/2">
            <form method="POST" ref={form} onSubmit={sendEmail} name="contactForm">
                <div className="space-y-4 ">
                    <div className="form-group">
                        <input type="text" className="text-black form-control inp w-full p-2 border rounded" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="text-black form-control inp w-full p-2 border rounded" name="user_email" placeholder="Your Email" required title="Ex. abc@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="text-black form-control inp w-full p-2 border rounded" name="user_number" placeholder="Your Number" required />
                    </div>
                    <div className="form-group">
                        <textarea className="text-black form-control inp w-full p-2 border rounded" name="user_message" placeholder="Write Your Message here..."></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="border-2 border-[#1fb7fc] text-[#1fb7fc] py-2 px-4 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ContactForm;