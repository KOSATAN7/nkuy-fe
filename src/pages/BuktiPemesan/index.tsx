import { Stack } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { AiFillCheckCircle } from "react-icons/ai";
import BuktiTable from "./components/BuktiTable";

const BuktiPemesanPage = () => {
  const rows = [
    { name: "Spagetti", banyak: 2, harga: 10000, jumlah: 20000 },
    { name: "Ice cream sandwich", banyak: 1, harga: 15000, jumlah: 15000 },
    { name: "Kawa - Kawa Hijau", banyak: 3, harga: 90000, jumlah: 270000 },
  ];

  const total = rows.reduce((sum, row) => sum + row.jumlah, 0);

  return (
    <div className="m-20">
      <div className="flex justify-center items-center">
        <Stack sx={{ width: "100%" }} spacing={4}>
          <StepperComponent activeStep={2} />
        </Stack>
      </div>
      <div className="mx-auto mt-10 p-12 border border-gray-300 max-w-5xl rounded-xl justify-center align-center text-center">
        <div className="flex items-center justify-center">
          <AiFillCheckCircle className="text-5xl text-primary1" />
          <h2 className="text-base font-medium ml-2">
            Pembayaran sedang tahap pengecekan! Bukti pemesanan kamu akan kami kirim ke whatsapp yaaa!
          </h2>
        </div>
        <div className="text-left p-7 -mb-8">
          <h1 className="font-bold text-xl">Pesanan Anda :</h1>
        </div>
        <BuktiTable rows={rows} total={total} />
        <div className="flex justify-center mt-6">
          <button className="w-56 py-2 bg-primary1 text-white rounded-lg text-sm">
            Lihat Status Reservasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuktiPemesanPage;