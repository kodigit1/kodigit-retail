import Union from "@/assets/images/Union.svg"
import pricingShape1 from "@/assets/images/pricing-shape1.png"
import pricingShape2 from "@/assets/images/pricing-shape2.png"
import Image from "next/image";

const FaqData = [
    {
        number: "I.",
        question: "Quali servizi offrite ai seller Amazon?",
        answer: "Connettori tra il tuo eCommerce o ERP e i marketplace, gestione completa dello store su Seller e Vendor Central, registrazioni EPR in Germania (WEEE, batterie e imballaggi), deposito del marchio e iscrizione ad Amazon Brand Registry, ed espansione sui marketplace Amazon europei."
    },
    {
        number: "II.",
        question: "Perché mi serve un numero WEEE per vendere su Amazon.de?",
        answer: "In Germania chi immette sul mercato apparecchi elettrici o elettronici deve registrarsi presso Stiftung EAR. Amazon richiede il numero di registrazione WEEE per i prodotti interessati e, senza un numero valido, può bloccare le offerte. Se non hai una sede in Germania serve un rappresentante autorizzato registrato presso EAR."
    },
    {
        number: "III.",
        question: "Il mio prodotto contiene una batteria: cosa devo fare?",
        answer: "Le batterie, anche quando sono integrate in un apparecchio, hanno un obbligo di registrazione separato. Un prodotto elettrico con batteria richiede quindi sia la registrazione WEEE sia quella batterie presso Stiftung EAR. Ci occupiamo di entrambe e delle dichiarazioni periodiche."
    },
    {
        number: "IV.",
        question: "E per gli imballaggi?",
        answer: "Chi spedisce prodotti imballati a consumatori in Germania deve registrarsi nel registro LUCID e aderire a un sistema duale per gli imballaggi di vendita e di spedizione. Amazon verifica il numero LUCID: ti aiutiamo con la registrazione, la scelta del sistema e le comunicazioni delle quantità."
    },
    {
        number: "V.",
        question: "Posso iscrivermi ad Amazon Brand Registry senza marchio registrato?",
        answer: "Serve un marchio registrato oppure una domanda di registrazione depositata presso un ufficio ammesso da Amazon, come EUIPO o UIBM. Se non hai ancora un marchio, coordiniamo il deposito con professionisti del settore e poi completiamo l'iscrizione al Brand Registry."
    },
    {
        number: "VI.",
        question: "Quali piattaforme eCommerce potete collegare ad Amazon?",
        answer: "Lavoriamo con le piattaforme più diffuse, come Shopify, WooCommerce, PrestaShop e Magento, oltre a ERP e PIM. Valutiamo il tuo stack e scegliamo il connettore più adatto per sincronizzare catalogo, stock, prezzi e ordini su Amazon e sugli altri marketplace europei."
    },
    {
        number: "VII.",
        question: "Vi occupate anche dell'IVA nei paesi europei?",
        answer: "Gli adempimenti IVA richiedono un consulente fiscale abilitato: per questo lavoriamo con partner specializzati e coordiniamo noi il flusso di informazioni, così IVA, EPR e logistica Pan-EU restano allineati."
    }
];

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        Faq
                    </span>
                    <h2 className="section-title section-title2">
                        Domande frequenti, <span>risposte chiare</span>
                    </h2>
                    <p className="section-desc">Le domande che ci fanno più spesso i seller Amazon su registrazioni EPR in Germania,
                        Brand Registry, connettori e gestione dello store.</p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <Image src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <Image src={pricingShape2} alt="shape" />
                    </div>

                    {FaqData.map((faq, index) =>
                        <div className="accordion-item faq-item" key={faq.number}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className={`accordion-button${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0} aria-controls={`collapse${index}`}>
                                    <span className="number">{faq.number}</span> {faq.question} <span className="plus-icon"><span /><span /></span>
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default FaqV1;
