import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Nav.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/weekly"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Weekly
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/weekly-battle"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                WeeklyBattle
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/popular"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Popular
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/popular-battle"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                PopularBattle
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/favorites"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Favorites
                            </NavLink>
                        </li>


                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;