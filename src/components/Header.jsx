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
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fas fa-globe"></i>
                </nav>
            </header>
        </>
    )
}

export default Header;