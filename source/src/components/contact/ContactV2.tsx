"use client";
import btnArrow from "@/assets/images/btn-arrow.svg";
import Image from "next/image";
import { toast } from "react-toastify";

const companyTypes = [
    { id: "brand", label: "Brand / Produttore" },
    { id: "reseller", label: "Rivenditore / Distributore" },
    { id: "ecommerce", label: "eCommerce" },
    { id: "vendor", label: "Vendor Amazon" },
    { id: "other", label: "Altro" }
];

const services = [
    { id: "connectors", label: "Connettori eCommerce" },
    { id: "store-management", label: "Gestione Store Amazon" },
    { id: "epr-compliance", label: "Compliance EPR Germania" },
    { id: "brand-registry", label: "Brand Registry" },
    { id: "eu-expansion", label: "Espansione Europea" },
    { id: "other-service", label: "Altro" }
];

const marketplaces = [
    { id: "amazon-it", label: "Amazon.it" },
    { id: "amazon-de", label: "Amazon.de" },
    { id: "amazon-fr", label: "Amazon.fr" },
    { id: "amazon-es", label: "Amazon.es" },
    { id: "amazon-nl", label: "Amazon.nl" },
    { id: "other-marketplace", label: "Altri marketplace" }
];

const revenueRanges = [
    { id: "revenue-none", label: "Non vendo ancora" },
    { id: "revenue-low", label: "Fino a 10.000 €" },
    { id: "revenue-mid", label: "10.000 – 50.000 €" },
    { id: "revenue-high", label: "Oltre 50.000 €" }
];

const ContactV2 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Grazie, ti ricontatteremo a breve");
    }

    return (
        <>
            <div className="contact-sec-2">
                <div className="custom-container">
                    <form id="contactForm" className="contact-form" onSubmit={handleForm}>
                        <input type="hidden" name="access_key" />
                        <input type="hidden" name="from_name" />
                        <input type="hidden" name="subject" />
                        <div className="col-2">
                            <div className="input-group">
                                <label htmlFor="first_name">Nome:</label>
                                <input type="text" name="first_name" id="first_name" placeholder="Mario" autoComplete="off" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last_name">Cognome:</label>
                                <input type="text" name="last_name" id="last_name" placeholder="Rossi" autoComplete="off" required />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label htmlFor="company">Azienda:</label>
                                <input type="text" name="company" id="company" placeholder="Rossi S.r.l." autoComplete="off" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Telefono:</label>
                                <input type="tel" name="phone" id="phone" placeholder="+39 333 123 4567" autoComplete="off" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder="mario.rossi@azienda.it" autoComplete="off" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="brand">Che tipo di azienda sei?</label>
                            <div className="radio-btns">
                                {companyTypes.map((type, index) => (
                                    <div className="radio-btn" key={type.id}>
                                        <input type="radio" id={type.id} name="company_type" defaultValue={type.label} defaultChecked={index === 0} />
                                        <label htmlFor={type.id}>{type.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="connectors">Di cosa hai bisogno?</label>
                            <div className="checkbox-btns">
                                {services.map(service => (
                                    <div className="checkbox-btn" key={service.id}>
                                        <input type="checkbox" name="service_type" id={service.id} defaultValue={service.label} />
                                        <span className="checkbox-marker"><i className="las la-check" /></span>
                                        <span className="checkbox-label">{service.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="amazon-it">Su quali marketplace vendi o vuoi vendere?</label>
                            <div className="checkbox-btns">
                                {marketplaces.map(marketplace => (
                                    <div className="checkbox-btn" key={marketplace.id}>
                                        <input type="checkbox" name="marketplace" id={marketplace.id} defaultValue={marketplace.label} />
                                        <span className="checkbox-marker"><i className="las la-check" /></span>
                                        <span className="checkbox-label">{marketplace.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="revenue-none">Fatturato mensile attuale sui marketplace:</label>
                            <div className="radio-btns">
                                {revenueRanges.map((range, index) => (
                                    <div className="radio-btn" key={range.id}>
                                        <input type="radio" id={range.id} name="monthly_revenue" defaultValue={range.label} defaultChecked={index === 0} />
                                        <label htmlFor={range.id}>{range.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Messaggio:</label>
                            <textarea name="message" id="message" placeholder="Raccontaci cosa vendi, quali sistemi usi (es. Shopify, ERP) e quali obiettivi hai" required defaultValue={""} />
                        </div>
                        <div className="input-group">
                            <div className="single-checkbox checkbox-btn">
                                <input type="checkbox" name="privacy_consent" id="condition" required />
                                <span className="checkbox-marker"><i className="las la-check" /></span>
                                <span className="checkbox-label">Acconsento al trattamento dei dati personali per essere ricontattato</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="theme-btn">
                                Invia richiesta
                                <Image src={btnArrow} alt="icon" />
                            </button>
                        </div>
                        <div id="result" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactV2;
