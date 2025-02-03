import { useState } from "react";
import { MdDateRange } from "react-icons/md";

const DetailPembayaran = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [reservasi, setReservasi] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileUploaded(true);
      setFileName(e.target.files[0].name);
    } else {
      setFileUploaded(false);
      setFileName("");
    }
  };

  const handleReservasiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReservasi(e.target.value);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 w-96 sticky top-8">
      <h2 className="font-bold text-xl mb-4">Detail Pemesanan</h2>

      <div className="flex justify-between text-sm mb-4">
        <div className="flex items-center gap-1">
          <MdDateRange className="text-xl" />
          <p>12 Januari 2024</p>
        </div>
        <p>Username: Obet</p>
      </div>

      <hr className="border-black mb-4" />

      <div className="mb-4">
        <p className="font-semibold">Spaghetti</p>
        <div className="flex justify-between text-sm">
          <p>2 x Rp 20.000</p>
          <p>Rp 40.000</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Spaghetti</p>
        <div className="flex justify-between text-sm">
          <p>2 x Rp 20.000</p>
          <p>Rp 40.000</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Spaghetti</p>
        <div className="flex justify-between text-sm">
          <p>2 x Rp 20.000</p>
          <p>Rp 40.000</p>
        </div>
      </div>
      <div className="mb-12">
        <p className="font-semibold">Spaghetti</p>
        <div className="flex justify-between text-sm">
          <p>2 x Rp 20.000</p>
          <p>Rp 40.000</p>
        </div>
      </div>

      <div className="flex justify-between font-semibold mb-4">
        <p>Total</p>
        <p>Rp 160.000</p>
      </div>

      <hr className="border-black mb-4" />

      <div className="mb-4">
        <p className="font-semibold">Reservasi</p>
        <div className="border border-gray-300 rounded-lg p-2 mt-2">
          <input
            type="number"
            placeholder="Ada berapa orang yang mau reservasi?"
            className="w-full text-sm focus:outline-none"
            value={reservasi}
            onChange={handleReservasiChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Bukti Pembayaran</p>
        <div className="border border-gray-300 rounded-lg flex">
          <div className="flex-1 p-2">
            <p className="text-sm text-gray-400">
              {fileName ? fileName : "Masukkan bukti pembayaran"}
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            id="fileInput"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="text-sm text-white bg-primary1 px-4 py-2 cursor-pointer rounded-r-lg"
          >
            Cari File
          </label>
        </div>
      </div>

      <button
        className={`w-full py-2 rounded-lg ${
          fileUploaded
            ? "bg-primary1 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!fileUploaded}
      >
        Pesan Sekarang
      </button>
    </div>
  );
};

export default DetailPembayaran;