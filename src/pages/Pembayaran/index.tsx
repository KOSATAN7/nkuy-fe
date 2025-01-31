import { Stack } from "@mui/material";
import StepperComponent from "./components/Stepper";
import PembayaranCard from "./components/PembayaranCard";
import DetailPembayaran from "./components/DetailPembayaran";
import { BsCreditCardFill } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import { useState } from "react";

const PembayaranPage = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentChange = (value: string) => {
    setSelectedPayment(value);
  };

  const gambar = [
    "/src/assets/bca.svg",
    "/src/assets/bri.svg",
    "/src/assets/mandiri.svg",
    "/src/assets/gopay.svg",
    "/src/assets/dana.png",
    "/src/assets/ovo.png",
  ];

  return (
    <div>
      <div className="m-20">
        <div className="flex justify-center items-center">
          <Stack sx={{ width: "100%" }} spacing={4}>
            <StepperComponent activeStep={1} />
          </Stack>
        </div>
        <div className="ml-32 mt-24 p-4">
          <div className="cursor-pointer">
            <h1 className="font-bold text-3xl">Pembayaran</h1>
            <p className="font-sm text-sm">
              Yuk! pilih metode pembayaran terlebih dahulu.
            </p>
          </div>

          <div className="flex mt-8 gap-12">
            <div className="w-1/2">
              <PembayaranCard
                icon={<BsCreditCardFill className="text-2xl mb-2" />}
                title="Rekening"
                images={gambar.slice(0, 3)}
                items={["BCA", "BRI", "Mandiri"]}
                selectedPayment={selectedPayment}
                onPaymentChange={handlePaymentChange}
              />

              <div className="mt-6">
                <PembayaranCard
                  icon={<BiSolidWallet className="text-2xl mb-2" />}
                  title="E-Wallet"
                  images={gambar.slice(3)}
                  items={["GoPay", "OVO", "DANA"]}
                  borderColor="border-gray-300"
                  selectedPayment={selectedPayment}
                  onPaymentChange={handlePaymentChange}
                />
              </div>
            </div>

            <div className="w-1/3">
              <DetailPembayaran />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PembayaranPage;
