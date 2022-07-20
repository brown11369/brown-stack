import pro1 from "./pro1.jpg";
import pro2 from "./pro2.jpg";
import pro3 from "./pro3.jpg";
import pro4 from "./pro4.jpg";
import pro5 from "./pro5.jpg";
import pro6 from "./pro6.jpg";
import pro7 from "./pro7.jpg";
import pro8 from "./pro8.jpg";
import pro9 from "./pro9.jpg";

function Work(){
    return (
        <div id="work" className="slide">
                <h2 className="detl">My Work</h2>
                <div className="card-box">
                    <div className="card">
                        <img src={pro1} className="proj-img" alt="project-1"/>
                    </div>
                    <div className="card">
                        <img src={pro2} className="proj-img" alt="project-2"/>
                    </div>
                    <div className="card">
                        <img src={pro3} className="proj-img" alt="project-3"/>
                    </div>
                    <div className="card">
                        <img src={pro4} className="proj-img" alt="project-4"/>
                    </div>
                    <div className="card">
                        <img src={pro5} className="proj-img" alt="project-5"/>
                    </div>
                    <div className="card">
                        <img src={pro6} className="proj-img" alt="project-6"/>
                    </div>
                    <div className="card">
                        <img src={pro7} className="proj-img" alt="project-7"/>
                    </div>
                    <div className="card">
                        <img src={pro8} className="proj-img" alt="project-8"/>
                    </div>
                    <div className="card">
                        <img src={pro9} className="proj-img" alt="project-9"/>
                    </div>
                </div>
            </div>
    )
}

export default Work;