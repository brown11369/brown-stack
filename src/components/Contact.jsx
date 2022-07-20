import "../style/contact.css"

function Contact() {
    return (
        <div id="contact" className="slide">

            <h2 className="detl">Contact Me</h2>
            <div className="about-box">
                <div className="about-text">
                    <p className="about">Since beginning my journey as a freelance developer nearly 10 years ago, I’ve
                        done
                        remote work for agencies, consulted for startups, and collaborated with talented people to
                        create
                        web products for both business and consumer use.
                        I create successful responsive websites that are fast, easy to use, and built with best
                        practices.
                        The main area of my expertise is front-end development, HTML, CSS, JS, building small and
                        medium web
                        apps, custom plugins, features, animations, and coding interactive layouts.
                        I also have full-stack developer experience with popular open-source CMS like (WordPress,
                        Drupal,
                        Magento, Keystone.js and others) .
                    </p>
                </div>
                <div className="animat bar-box">
                    <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control inp" name="name" id="name"
                                        placeholder="Your Name" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="email" className="form-control inp" name="email" id="email"
                                        placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control inp" name="subject" id="subject"
                                        placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control inp" id="message" cols="30" rows="7"
                                        placeholder="Write Your Message here..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button type="submit" value="Send Message" className="btn btn-primary">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}


export default Contact;