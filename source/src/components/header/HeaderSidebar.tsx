/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderSidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>

            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <Image src={sidebarbg} alt="sidebar" className="sidebar-shape" />
                    <div className="header-sidebar-top">
                        <ul>
                            <li>
                                <span>Kodigit KFT</span>
                                <a href="https://maps.google.com/?q=Honved+utca+8,+1054+Budapest" target="_blank" rel="noopener noreferrer">Honved utca 8.1.</a>
                            </li>
                            <li>
                                <span>1054 Budapest</span>
                                <a href="tel:+36705879526">+36 70 587 9526</a>
                            </li>
                            <li>
                                <span>Email</span>
                                <a href="mailto:info@kodigit.agency">info@kodigit.agency</a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="#about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="#services" onClick={handleCloseClick}>Services</a>
                            </li>
                            <li>
                                <a href="#projects" onClick={handleCloseClick}>Projects</a>
                            </li>
                            <li>
                                <a href="#awards" onClick={handleCloseClick}>Awards</a>
                            </li>
                            <li>
                                <a href="#team" onClick={handleCloseClick}>Members</a>
                            </li>
                            <li>
                                <a href="#pricing" onClick={handleCloseClick}>Pricing</a>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleCloseClick}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;
