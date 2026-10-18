"use client";
import dynamic from "next/dynamic";
import btnArrow from '@/assets/images/btn-arrow.svg';
import contactThumb from '@/assets/images/contact.png';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ContactV1 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Grazie, ti ricontatteremo a breve");
    }

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>Parliamo del <span>tuo store</span></h3>
                            <p>
                                <span className="required">*</span> Raccontaci cosa vendi e su quali marketplace: ti diciamo quali registrazioni servono, <br /> come collegare i tuoi sistemi e da dove partire. Compila il modulo qui sotto.
                            </p>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Nome e azienda" autoComplete="off" required />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="E-mail" autoComplete="off" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="phone" autoComplete="off" placeholder="Telefono" required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Cosa vendi e su quali marketplace?" autoComplete="off" required />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn">
                                        Invia richiesta
                                        <Image src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-box">
                            <Image src={contactThumb} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(ContactV1), { ssr: false });