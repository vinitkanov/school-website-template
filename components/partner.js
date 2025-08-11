//components/partner.js
import React from 'react';

const Partnerlist = [
    {
        name: "Logoipsum",
        src: "/partner-1.svg"
    },
    {
        name: "Logoipsum",
        src: "/partner-2.svg"
    },
    {
        name: "Logoipsum",
        src: "/partner-3.svg"
    },
    {
        name: "Logoipsum",
        src: "/partner-4.svg"
    },
    {
        name: "Logoipsum",
        src: "/partner-5.svg"
    }
]

const Partner = ({ name, src }) => {
    return (
        <div className="partner">
            <img src={src} alt={`${name} logo`} className="partner-logo" draggable="false" />
        </div>
    )
}
const PartnerListComponent = () => {
    return (
        <div className="partner-list flex flex-wrap justify-center items-center gap-8 md:gap-16 border-t-1 border-[#C8C8C8] pt-16 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold w-full text-center mb-4">Partner Kami</h2>
            {Partnerlist.map((partner, idx) => (
                <Partner key={idx} name={partner.name} src={partner.src} />
            ))}
        </div>
    );
};

export default PartnerListComponent;