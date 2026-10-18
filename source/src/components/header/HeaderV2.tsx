import Link from 'next/link';
import logo1 from "@/assets/images/kodigit/logo.png"
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const HeaderV2 = () => {
    return (
        <>
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
                                        <li><Link href="/team-details/1">Team Single</Link></li>
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
                            <a href="mailto:info@kodigit.agency" aria-label="Scrivi a info@kodigit.agency">
                                <i className="iconoir-mail-out" />
                            </a>
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV2;