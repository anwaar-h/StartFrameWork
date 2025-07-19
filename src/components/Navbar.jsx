import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
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
                <a className="navbar-brand text-uppercase" href="/">
                    Start Framework
                </a>
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
                            <a className="nav-link text-uppercase" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-uppercase" href="/portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link text-uppercase" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
