import "../style/contact.css"
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

function Contact() {

    let form = useRef();
    let [toast, setToast] = useState(false)
    let [toastmsg, setToastmsg] = useState("")

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_3ihkzr6", "template_r3q2p99", form.current, "u-fGvXSTLLOOP4cop")
            .then((res) => {
                if (res.status === 200) {
                    setToast(true)
                    setToastmsg("Your message Send...")
                    form.current.reset();
                    setTimeout(()=>{
                        setToast(false)
                    },5000)
                }
                else{

                }
            })
            .catch((err) => {
                console.log(err.text)
                console.log(err)
            })

    }


    return (
        <div className="slide">

            <h2 className="detl">Contact Me</h2>
            <div className="about-box">
                <div className="about-text">
                    <p className="about">Since beginning my journey as a freelance developer nearly 2+ years ago, I’ve
                        done
                        remote work, and collaborated with talented people to
                        create
                        web products for both business and consumer use.
                        I create successful responsive websites that are fast, easy to use, and built with best
                        practices.
                        The main area of my expertise is front-end development, HTML, CSS, JS, building small and
                        medium web
                        apps, features, animations, and coding interactive layouts.
                        I also have full-stack developer experience with popular open-source CMS and other technologies like (WordPress, React MongoDB, Express, Node).
                    </p>
                </div>
                <div className="ani-box bar-box">
                    <form method="POST" ref={form} onSubmit={sendEmail} name="contactForm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control inp" name="user_name" placeholder="Your Name" required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="email" className="form-control inp" name="user_email" placeholder="Your Email" required title="Ex. abc@gmail.com"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="number" className="form-control inp" name="user_number" placeholder="Your Number" required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form-control inp" name="user_message" placeholder="Write Your Message here..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {toast &&
                <div className="toast-msg">
                    <p>{toastmsg}</p>
                </div>
            }


        </div>
    )
}


export default Contact;