"use client"
import Union from "@/assets/images/Union.svg"
import arrowDown from "@/assets/images/arrow-down.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import SingleServicesV1 from "./SingleServicesV1"
import { useState } from "react"

const ServicesV1 = () => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            I nostri servizi
                        </span>
                        <AnimatedText>
                            {`Tutto ciò che serve a un seller Amazon per vendere in Europa: integrazioni, gestione dello store, registrazioni EPR, protezione del marchio ed espansione nei marketplace UE.`}
                        </AnimatedText>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Servizio
                            </div>
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Cosa include
                            </div>
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Illustrazione
                            </div>
                        </div>
                    </div>

                    {/* Service Lists */}
                    <div className="service-lists">
                        {ServicesV1Data.map(services =>
                            <div
                                className={`service-box ${activeServiceId === services.id ? 'active' : ''}`}
                                key={services.id}
                                onMouseEnter={() => handleMouseEnter(services.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <SingleServicesV1 services={services} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;