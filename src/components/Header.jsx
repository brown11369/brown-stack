import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo"><img src='/assets/images/profil-linkedin.jpg ' className="profile" alt="profile" /></div>
                <nav className="nav">
                    <ul className="navigation">
                        <li className="nav_link"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav_link"><NavLink to="/about">About</NavLink></li>
                        <li className="nav_link"><NavLink to="/skills">My Skills</NavLink></li>
                        <li className="nav_link"><NavLink to="/work">Work</NavLink></li>
                        <li className="nav_link"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/brown11369?tab=repositories"><i class="fab fa-github-square"></i></a>
                   
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/barun-kumar-234162225/"><i class="fab fa-linkedin"></i></a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://brownbug.in/"><i class="fas fa-globe"></i></a>
                    
                </nav>
            </header>
        </>
    )
}

export default Header;