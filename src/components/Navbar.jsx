import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "/LogoSantosAlarcon.svg"
import "../styles/Navbar.css"

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (toggle) {
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "auto";
        }
    }, [toggle])

    return (
        <header>
            <nav
                className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar backdrop-blur`}
                role="navigation"
            >
                <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                        <p className="text-white text-[18px] font-bold cursor-pointer flex">
                            Santos Alarcón Asensio
                        </p>
                    </Link>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${active === link.title ? "text-white" : "text-secondary"
                                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] 
                        object-contain cursor-pointer transition"
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                </div>
            </nav>
            <div
                className={`${!toggle ? "opacity-0" : "opacity-100"} flex p-6 bg-[#000b] backdrop-blur overflow-hidden fixed top-[4.5em] right-0 min-w-[100%] min-h-[100vh] z-50 transition duration-300`}
            >
                <ul className="list-none flex justify-center items-center flex-col gap-4 w-full">
                    {navLinks.map((link) => (
                        <li
                            id="mobile-menu-link"
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"
                                } font-medium mobileNavLink hover:scale-150 text-[3em] transition ${toggle ? "translate-x-0" : "translate-x-96"}`}
                            onClick={() => { setActive(link.title); setToggle(!toggle); }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </header>
    );
};

export default Navbar;
