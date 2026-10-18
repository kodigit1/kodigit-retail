import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV2 from "./SingleFactV2"
import FactData from "@/assets/jsonData/fact/FactData.json"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="Chi siamo" /> Chi siamo
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Kodigit Retail riunisce in un solo team tecnologia, marketplace e compliance: accompagniamo i seller Amazon dal primo listing all'espansione in Europa, senza blocchi e senza sorprese...
                            </AnimatedText>
                            <AnimatedText>
                                Ci ispiriamo ai migliori fornitori europei di EPR, connettori e gestione account, ma mettiamo tutto sotto lo stesso tetto: un solo interlocutore che conosce il tuo catalogo, i tuoi sistemi e i tuoi mercati.
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV2 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;