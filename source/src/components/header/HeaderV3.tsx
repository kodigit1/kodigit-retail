"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo1 from "@/assets/images/kodigit/logo.png";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";

const HeaderV3 = () => {

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

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

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

            {/* Notch Bar Menu Wrap */}
            <div className="notch-bar-menu-wrap">
                <ul>
                    <li><a className="anchor active" href="#hero">Hero</a></li>
                    <li><a className="anchor" href="#about">About</a></li>
                    <li><a className="anchor" href="#services">Services</a></li>
                    <li><a className="anchor" href="#projects">Projects</a></li>
                    <li><a className="anchor" href="#awards">Awards</a></li>
                    <li><a className="anchor" href="#team">Team</a></li>
                    <li><a className="anchor" href="#pricing">Pricing</a></li>
                    <li><a className="anchor" href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* Sidebar 2 */}
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

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={logo1} alt="Kodigit Retail" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link href="/service-details/1">Servizi <span>(5)</span></Link>
                                </li>
                                <li>
                                    <Link href="/about">Chi siamo <span /></Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contatti <span /></Link>
                                </li>
                                <li className="dropdown-menu-item">
                                    <Link href="#">All Pages <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link href="/">Home - Ham Menu</Link></li>
                                        <li><Link href="/home-2">Home - Notch Menu</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/projects">Projects</Link></li>
                                        <li><Link href="/project-details/1">Project Single</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/blog-details/1">Blog Detail</Link></li>
                                        <li><Link href="/service-details/1">Service Single</Link></li>
                                        <li><Link href="/faq">Faq</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/not-found">404</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <a className="with-border" href="tel:+36705879526">+36 70 587 9526</a>
                            <a href="/contact" aria-label="Contattaci">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV3;