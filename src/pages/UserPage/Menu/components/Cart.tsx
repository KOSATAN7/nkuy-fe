import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartProps {
  items: CartItem[];
  total: number;
}

const Cart: React.FC<CartProps> = ({ items, total }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 shadow-lg">
      <h2 className="text-lg font-bold text-gray-800">Keranjang</h2>
      <hr className="h-1 w-16 bg-gradient-to-r from-primary1 to-white my-2" />

      <div className="mt-3 border border-gray-300">
        {items.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex items-center">
                <Typography>{item.name}</Typography>
                <div className="w-5 h-5 bg-primary1 rounded-full flex items-center justify-center ml-2">
                  <span className="text-white text-xs">{item.quantity}</span>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Rp {item.price.toLocaleString()} x {item.quantity}
              </Typography>
              <Typography>
                <span className="font-bold">Subtotal</span> Rp{" "}
                {(item.price * item.quantity).toLocaleString()}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <h2 className="text-lg p-4 mt-10">Total : Rp {total.toLocaleString()}</h2>
      <div className="flex justify-center items-center">
        <button className="w-9/12 py-2 bg-primary1 text-white rounded-lg text-sm">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default Cart;
