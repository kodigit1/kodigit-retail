import aixorBigLogo from "@/assets/images/kodigit/logo-big.png"
import Image from "next/image";

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <Image src={aixorBigLogo} alt="Kodigit Retail" />
            </div>
        </>
    );
};

export default Preloader;