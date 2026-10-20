"use client";
import Image from "next/image";
import Union from '@/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import Link from "next/link";
import btnArrow from '@/assets/images/btn-arrow.svg';

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

interface DataType {
    name?: string;
    thumbFull1?: string;
    steps?: string[];
    text?: string;
    price?: string;
    features?: string[];
    intro?: string;
    keyText1?: string;
    keyText2?: string;
    benefit?: string;
    paragraphs?: string[];
}

const ServiceDetailsContent = ({ serviceData }: { serviceData: DataType }) => {
    const { name, text, price, thumbFull1, steps = [], features = [], intro, keyText1, keyText2, benefit, paragraphs = [] } = serviceData

    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {name}
                        </span>
                        <AnimatedText>
                            {intro}
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box" >
                            <Image src={`/assets/images/${thumbFull1}`} alt={name ?? "Servizio"} width={1900} height={925} />
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">Servizio:</span>
                                <span className="subtitle">{name}</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">Descrizione:</span>
                                <span className="subtitle">{text}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">Prezzo:</span>
                                <span className="subtitle">{price}</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link href="/contact" className="theme-btn">
                                    RICHIEDI UN PREVENTIVO
                                    <Image src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-single-content-wrap">
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                COSA INCLUDE
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    {keyText1}
                                </AnimatedText>
                                <AnimatedText>
                                    {keyText2}
                                </AnimatedText>
                                <ul>
                                    {features.map((feature, index) =>
                                        <li key={feature}>{ROMAN[index]}. {feature}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="service-steps">
                            <h3 className="service-steps-title">{name} · come lavoriamo</h3>
                            <ol className="service-steps-list">
                                {steps.map((step, index) =>
                                    <li key={step} className="service-step">
                                        <span className="number">{index + 1}</span>
                                        <span className="title">{step}</span>
                                    </li>
                                )}
                            </ol>
                            <p className="service-steps-footer">Un unico referente per ogni fase</p>
                        </div>
                        <div className="section-header">
                            <span className="section-subtitle">
                                <Image src={Union} alt="icon" />
                                I VANTAGGI
                            </span>
                            <div className="right">
                                <AnimatedText>
                                    {benefit}
                                </AnimatedText>
                                <div className="paragraphs">
                                    {paragraphs.map(paragraph =>
                                        <p key={paragraph}>{paragraph}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
