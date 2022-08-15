import "../style/header.css"
import { NavLink } from "react-router-dom"
import { useRef, useState } from "react";

function Header() {

    const ham1 = useRef(null);
    const ham3 = useRef(null);
    const bar = useRef(null);
    const [togo, setTogo]= useState(true);

    const toggle = () => {
        if(togo===true){
            ham1.current.className = "ham1 active"
            ham3.current.className = "ham3 active"
            bar.current.className = "nav active";
            setTogo(false);
        }
        else{
            ham1.current.className = "ham1"
            ham3.current.className = "ham3"
            bar.current.className = "nav";
            setTogo(true);
        }
        
      };



    return (
        <>
            <header className="header">
                <div className="wrap"><div class="logo"><a href="/home"><img src="/assets/images/profile.jpg" className="profile" alt="profile"/></a></div><div className="ham" onClick={()=>{
                    toggle()
                }}><span className="ham1" ref={ham1}></span><span className="ham2"></span><span className="ham3 " ref={ham3}></span></div></div>
                <nav className="nav" ref={bar}>
                    <ul className="navigation">
                        <li className="nav_link"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav_link"><NavLink to="/about">About</NavLink></li>
                        <li className="nav_link"><NavLink to="/skills">My Skills</NavLink></li>
                        <li className="nav_link"><NavLink to="/work">Work</NavLink></li>
                        <li className="nav_link"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/brown11369?tab=repositories"><i class="fab fa-github-square"></i></a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/barun-kumar-234162225/"><i class="fab fa-linkedin"></i></a>

                    <a target="_blank" rel="noopener noreferrer" href="https://brownbug.in/"><i class="fas fa-globe"></i></a>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default Header;