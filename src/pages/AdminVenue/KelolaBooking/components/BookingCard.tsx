import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface BookingCardProps {
  onStatusUpdate: (bookingId: number, status: string) => void;
  nama: string;
  menu: { name: string; price: number; quantity: number }[];
  status: string;
  paymentReceiptUrl: string;
  bookingId: number;
}

const BookingCard: React.FC<BookingCardProps> = ({
  onStatusUpdate,
  nama = "Unknown",
  menu = [],
  status = "Pending",
  paymentReceiptUrl = "",
  bookingId,
}) => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStatusClick = () => setIsDropdownOpen(!isDropdownOpen);
  const handleAccept = () => {
    setIsDropdownOpen(false);
    onStatusUpdate(bookingId, "accepted");
  };
  const handleDecline = () => {
    setIsDropdownOpen(false);
    onStatusUpdate(bookingId, "declined");
  };

  const calculateTotal = () =>
    menu.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="px-10 py-3 rounded-lg bg-neutral2">
      <div className="flex flex-row items-center mx-2 py-4">
        <p>
          <strong>Nama Pembooking:</strong> {nama || "Unknown Name"}
        </p>
      </div>

      <div className="rounded-xl">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="menu">
            <strong>Menu</strong>
          </AccordionSummary>
          <AccordionDetails>
            {menu?.length > 0 ? (
              menu.map((item, index) => (
                <div key={index} className="py-1">
                  <p>{item.name}</p>
                  <p>Harga Satuan: ${item.price}</p>
                  <p>Jumlah: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              ))
            ) : (
              <p>No menu items available</p>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="receipt">
            <strong>Receipt</strong>
          </AccordionSummary>
          <AccordionDetails>
            {paymentReceiptUrl ? (
              <p>
                <a href={paymentReceiptUrl} target="_blank" rel="noopener noreferrer">
                  View payment receipt
                </a>
              </p>
            ) : (
              <p>No receipt available</p>
            )}
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="mt-3">
        <p className="font-bold">Total Harga: ${calculateTotal()}</p>
        <button onClick={handleStatusClick} className="px-4 py-2 text-black">
          <strong>Status:</strong> {status || "Unknown"}
        </button>

        {isDropdownOpen && (
          <div className="mt-2">
            <button
              onClick={handleAccept}
              className="flex items-center w-full px-4 py-2 text-green-500 hover:bg-gray-100 mb-2"
            >
              <FaCheck className="mr-2" /> Accept
            </button>
            <button
              onClick={handleDecline}
              className="flex items-center w-full px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              <FaTimes className="mr-2" /> Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
