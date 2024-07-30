"use client"
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";

function Contact() {

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
        <div className="bg-black p-10 text-base leading-8 text-white">
            <h2 className="text-[#1fb7fc] pb-5 text-2xl">Contact Me</h2>
            <div className="flex flex-col lg:flex-row">
                <p className="lg:basis-1/2 basis-full mb-6 lg:mb-0 lg:pr-6">
                    Since beginning my journey as a freelance developer nearly 2+ years ago, I’ve
                    done remote work, and collaborated with talented people to create
                    web products for both business and consumer use. I create successful responsive websites that are fast, easy to use, and built with best
                    practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and
                    medium web apps, features, animations, and coding interactive layouts.
                    I also have full-stack developer experience with popular open-source CMS and other technologies like (WordPress, React MongoDB, Express, Node).
                </p>
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
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}


export default Contact;