import Image from 'next/image';
import footerLogo from "@/assets/images/kodigit/logo-big.png"

const FooterV2 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <Image data-aos="slide-up" data-aos-duration={700} src={footerLogo} alt="Kodigit" />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;