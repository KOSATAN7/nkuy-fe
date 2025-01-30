import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface PanduanCardProps {
    title: string;
    steps: string[];

const PanduanCard: React.FC<PanduanCardProps> = ({ title, steps }) => {
    return (
        <Accordion className="w-full">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className="font-semibold text-gray-800">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ul className="text-sm text-gray-600 list-decimal list-inside space-y-1">
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </AccordionDetails>
        </Accordion>
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
