import React from "react";


interface PanduanCard {
    title: string;
    description: string;
    icon: React.ReactNode; 
}

const PanduanCard: React.FC<PanduanCard> = ({ title, description, icon }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-xl p-6 text-center w-80 mx-auto">
            {/* Ikon di atas kartu */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {icon}
                </div>
            </div>

            {/* Konten Kartu */}
            <h2 className="mt-6 text-xl font-bold text-gray-800">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default PanduanCard;
