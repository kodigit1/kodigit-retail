"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Union from "@/assets/images/Union.svg"
import pricingNavbar from "@/assets/images/pricing-navbar.svg"
import pricingShape1 from "@/assets/images/pricing-shape1.png"
import pricingShape2 from "@/assets/images/pricing-shape2.png"
import btnArrow from "@/assets/images/btn-arrow.svg"
import featuredIcon from "@/assets/images/featured-icon.svg"
import Image from "next/image";
import useTabIndicator from "@/hooks/useTabIndicator";
import { useRef } from "react";

const PriceV1 = () => {

    const indicatorRef = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    useTabIndicator({ navRef, indicatorRef });


    return (
        <>
            <div className="pricing-sec" id="pricing">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            PACCHETTI
                        </span>
                        <h2 className="section-title section-title2">
                            Pacchetti chiari, <span>su misura</span>
                        </h2>
                        <p className="section-desc">
                            Che tu stia aprendo il tuo primo account o voglia crescere in tutta Europa,<br />
                            componiamo il pacchetto più adatto ai tuoi prodotti e ai tuoi mercati.
                        </p>
                    </div>
                    <div className="pricing_nav_wrap">
                        <ul className="pricing_nav nav-tabs" id="myTab" role="tablist" ref={navRef}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Avvio</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false">Gestione mensile</button>
                            </li>
                        </ul>
                        <span className="nav-hover-shape" ref={indicatorRef} style={{ left: 439, opacity: 1 }}>
                            <Image src={pricingNavbar} alt="shape" />
                        </span>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <Image src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <Image src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Compliance Germania</span>
                                        <h3 className="price">Su preventivo<span> / una tantum</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Per chi vuole vendere su Amazon.de in regola con gli obblighi EPR.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Verifica degli obblighi per prodotto</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Registrazione WEEE presso Stiftung EAR</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Registrazione batterie</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Registrazione LUCID e sistema duale</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Caricamento numeri EPR in Seller Central</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link href="/contact" className="theme-btn">
                                            Richiedi un preventivo <Image src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <Image src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Brand Launch</span>
                                        <h3 className="price">Su preventivo<span> / una tantum</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Per i brand che vogliono partire su Amazon con le basi giuste.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Apertura e audit dell'account</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Coordinamento deposito marchio EUIPO / UIBM</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Iscrizione ad Amazon Brand Registry</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Listing ottimizzati e contenuti A+</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Connettore eCommerce ↔ Amazon</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link href="/contact" className="theme-btn">
                                            Richiedi un preventivo <Image src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="annual" role="tabpanel" aria-labelledby="annual-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <Image src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <Image src={pricingShape2} alt="shape" />
                                </div>
                                <div className="pricing-box" data-aos="fade-up">
                                    <div className="pricing-header">
                                        <span className="title">Store Care</span>
                                        <h3 className="price">Su preventivo<span> / mese</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Per i seller che vogliono uno store curato e sempre in regola.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Gestione listing e catalogo</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Monitoraggio account health</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Rinnovi e dichiarazioni EPR</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Supporto sui casi con Amazon</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Report mensile</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link href="/contact" className="theme-btn">
                                            Richiedi un preventivo <Image src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="pricing-box" data-aos="fade-up" data-aos-delay={200}>
                                    <span className="pricing-featured-icon">
                                        <Image src={featuredIcon} alt="icon" />
                                    </span>
                                    <div className="pricing-header">
                                        <span className="title">Full Service</span>
                                        <h3 className="price">Su preventivo<span> / mese</span></h3>
                                        <p className="content">
                                            <span className="required">*</span> Per chi vuole crescere su più marketplace europei con un unico partner.
                                        </p>
                                        <ul className="feature-lists">
                                            <li><span className="icon"><i className="las la-check" /></span> Tutto quello che include Store Care</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Gestione campagne Amazon Ads</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Connettori e sincronizzazione multicanale</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Espansione su nuovi marketplace UE</li>
                                            <li><span className="icon"><i className="las la-check" /></span> Referente dedicato</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link href="/contact" className="theme-btn">
                                            Richiedi un preventivo <Image src={btnArrow} alt="icon" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(PriceV1), { ssr: false });