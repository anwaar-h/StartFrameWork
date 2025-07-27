import { useState } from "react";
import { NavLink , Link } from "react-router-dom";
export default function Navbar() {
    
    // navbar expanding
    const [isScroll, setisScroll] = useState(false)
    window.addEventListener("scroll",function(){
        if (scrollY>0){
            setisScroll(true)
        } else{
            setisScroll(false)
        }
    })

    return (
        <nav className={`navbar navbar-expand-lg transition fixed-top ${isScroll?"":"py-4"}`}>
            <div className="container">
                <Link className="navbar-brand text-uppercase" to="/home">
                    Start Framework
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-uppercase" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-uppercase" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link text-uppercase" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
