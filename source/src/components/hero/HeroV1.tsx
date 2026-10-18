"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

const HeroV1 = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            {isClient && (
                                <video loop muted autoPlay>
                                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>“ Kodigit Retail è il partner unico per chi vende su Amazon: colleghiamo il tuo eCommerce ai marketplace, gestiamo il tuo store e ci occupiamo delle registrazioni obbligatorie per vendere in Europa.</p>
                                <p>WEEE e batterie in Germania, imballaggi su LUCID, Brand Registry, connettori e gestione di Seller Central: tu pensi al prodotto, al resto pensiamo noi. “</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Kodigit Retail</h4>
                                <span>Servizi per Amazon Seller</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Vendi su Amazon</h2>
                                <h2>in tutta Europa</h2>
                            </div>

                            {/* Button Section */}
                            <Link href="/contact" className="theme-btn">
                                Parliamone
                                <Image src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;