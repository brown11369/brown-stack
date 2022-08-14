import "../style/home.css"

function Home() {
    return (
        <div className="slide home-slide">
            <h2 className="detl"> Hi,<br></br>I'm Brown,<br></br></h2>
            <div className="ani">
                <div className="anio">
                    <div className="ani1">Front-End</div>
                    <div className="ani2">Back-End</div>
                </div>
                <span className="detl">Developer</span>
            </div>
            <p className="about">Front-End Developer with hands-on experience designing, developing, and
                implementing applications and solutions using a range of technologies and programming languages.
                Seeking to leverage broad development experience and hands-on technical expertise in a challenging
                role as a Full-stack Developer.</p>
            <div className="tech">
            <i className="fab fa-html5 icn"></i>
                <i className="fab fa-css3 icn"></i>
                <i className="fab fa-js icn"></i>
                <i className="fab fa-node icn"></i>
                <i className="fab fa-react icn"></i>
                <i className="fab fa-git-alt icn"></i>
                <i className="fab fa-github icn"></i> 
                <i className="fab fa-bootstrap icn"></i>
            </div>
            <div className="list">
                <a href="#resume"><button className="btn"><i className="fa-solid fa-memo"></i>
                    Resume</button></a>
                <a href="mailto:brown11369@gmail.com"><button className="btn"><i className="fa-solid fa-envelope"></i>
                    Brown11369@gmail.com</button></a>
                <a href="tel:+919870895374"><button className="btn"><i className="fa-solid fa-phone"></i>
                    9870895374</button></a>
            </div>
        </div>
    )
}


export default Home;