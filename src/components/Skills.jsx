import "../style/skill.css"

function Skills(){
    return (
        <div id="sklill" className="slide">
                <h2 className="detl">Skills and<br></br>Experience</h2>
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
                        <h3 className="bar-text">HTML</h3>
                        <div className="bar-border">
                            <div className="bar html-bar"></div>
                        </div>
                        <h3 className="bar-text">CSS</h3>
                        <div className="bar-border">
                            <div className="bar css-bar"></div>
                        </div>
                        <h3 className="bar-text">Javascript</h3>
                        <div className="bar-border">
                            <div className="bar js-bar"></div>
                        </div>
                        <h3 className="bar-text">Bootstrap</h3>
                        <div className="bar-border">
                            <div className="bar strp-bar"></div>
                        </div>
                        <h3 className="bar-text">Tailwind CSS</h3>
                        <div className="bar-border">
                            <div className="bar tail-bar"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Skills;