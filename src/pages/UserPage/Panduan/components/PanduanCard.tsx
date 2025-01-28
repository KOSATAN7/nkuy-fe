import React from "react";


interface PanduanCard {
    title: string;
    description: string;
}

const PanduanCard: React.FC<PanduanCard> = ({ title, description}) => {
    return (
        <div className="p-3 border-2 border-black rounded-xl w-full h-full">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-semibold text-xl mb-3">
                    {title}
                </h1>
                <p className="text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PanduanCard;
