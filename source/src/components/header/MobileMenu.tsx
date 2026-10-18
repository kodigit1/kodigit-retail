"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileMenu = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    useEffect(() => {
        // Close the menu when the viewport grows back to desktop width
        const handleResize = () => {
            if (window.innerWidth > 1024) setIsOpen(false);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            {/* Hamburger button (tablet / mobile only) */}
            <button
                type="button"
                className="header-hamburg"
                aria-label="Apri il menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
            >
                <span />
                <span />
                <span />
            </button>

            {/* Rendered on body so it sits above the header stacking context */}
            {isMounted && createPortal(
                <div className={`header-sidebar-wrap mobile-menu-wrap ${isOpen ? "active" : ""}`} onClick={handleClose}>
                    <div className="header-sidebar-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-header-sidebar" onClick={handleClose} aria-label="Chiudi il menu">
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

                        {/* Main menu */}
                        <nav className="sidebar-menu">
                            <ul className="menu">
                                <li>
                                    <Link href="/" onClick={handleClose}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/service-details/1" onClick={handleClose}>Servizi</Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={handleClose}>Chi siamo</Link>
                                </li>
                                <li>
                                    <Link href="/contact" onClick={handleClose}>Contatti</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default MobileMenu;
