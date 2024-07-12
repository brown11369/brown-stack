import "./about.css"

function About() {
    return (
        <div id="about" className="slide">
                <h2 className="detl">About Me</h2>
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
                    <div className="animat">
                        <img src='/assets/images/circle.gif' className="about-img" alt="merapic"/>
                    </div>
                </div>
            </div>
    )
}

export default About;

