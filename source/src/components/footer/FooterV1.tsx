"use client";
import dynamic from "next/dynamic";
import btnArrow from "@/assets/images/btn-arrow.svg"
import footerBigLogo from "@/assets/images/footer-big-logo.png"
import Image from "next/image";
import Link from "next/link";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> Members
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> Stories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/projects">
                                                <Image src={btnArrow} alt="icon" /> Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} KODIGIT KFT · P.IVA HU25461048
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>CONTATTI</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+36705879526" className="with-border">+36 70 587 9526</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="https://maps.google.com/?q=Honved+utca+8,+1054+Budapest" target="_blank" rel="noopener noreferrer" className="with-border">Honved utca 8.1., 1054 Budapest</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="theme-btn">
                                        Parliamone
                                        <Image src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <Image data-aos="slide-up" data-aos-duration={700} src={footerBigLogo} alt="logo" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default dynamic(() => Promise.resolve(FooterV1), { ssr: false });