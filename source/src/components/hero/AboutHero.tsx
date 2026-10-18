import contact from '@/assets/images/contact.png';
import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <Image className="hero-shape" src={contact} alt="Shape" />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>{`"Kodigit Retail aiuta i seller Amazon a vendere in Europa in modo semplice e conforme: connettori, gestione store, compliance EPR e protezione del marchio, con un unico referente."`}</p>
                            </div>
                            <div className="author-info">
                                <h4>Kodigit Retail</h4>
                                <span>Servizi per Amazon Seller</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Pagina non trovata"}</h2>
                                <h2>Kodigit Retail</h2>
                            </div>
                            <Link href="/contact" className="theme-btn">
                                Parliamone
                                <Image src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;