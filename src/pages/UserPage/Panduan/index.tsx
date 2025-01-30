import MainLayout from "../LandingPage/Layout";
import PanduanCard from "./components/PanduanCard";
import { useState } from "react";

const PanduanPage = () => {
    const [role, setRole] = useState("Pengguna");

    return (
        <MainLayout>
            <div className="px-32 py-12 mb-32">
                <div className="m-10 ">
                    <h3 className="text-sm text-black-500 font-extrabold">Panduan</h3>
                    <h1 className="font-extrabold text-3xl mt-1">ANDA BINGUNG UNTUK MEMULAI?</h1>
                    <div className="w-20 h-1 bg-gray-800 mt-2"></div>
                    <p className="mt-4 text-gray-600">
                        Yuk ikuti langkah - langkah berikut, jangan lupa untuk daftar atau login terlebih dahulu yaaa...
                    </p>
                </div>

                <div className="m-8 space-x-4 p-2">
                    <button
                        className={`px-6 py-2 rounded-full ${role === "Pengguna" ? "bg-blue-500 text-white" : "bg-white"}`}
                        onClick={() => setRole("Pengguna")}>
                        Pengguna
                    </button>
                    <button
                        className={`px-6 py-2 rounded-full ${role === "Admin" ? "bg-blue-500 text-white" : "bg-white"}`}
                        onClick={() => setRole("Admin")}>
                        Admin
                    </button>
                </div>
                {role === "Pengguna" ? (
                    <div className="w-full mx-10">
                        <PanduanCard
                            title="Ingin Mencari Tontonan?"
                            steps={[
                                "Buka halaman beranda.",
                                "Klik kolom pencarian pada beranda.",
                                "Ketikkan tayangan yang ingin anda cari."
                            ]}
                        />

                        <PanduanCard
                            title="Bingung Menonton Dimana?"
                            steps={[
                                "Pada halaman beranda, anda bisa melihat daftar venue yang menyediakan tayangan.",
                                "Klik tombol 'Lihat Venue' yang ada pada tayangan yang anda pilih.",
                                "Anda akan dialihkan ke halaman detail venue."
                            ]}
                        />
                        <PanduanCard
                            title="Anda Tidak Tahu Tentang Venue Tersebut?"
                            steps={[
                                "Pilih venue yang ingin anda tuju.",
                                "Klik gambar Venue tersebut / Anda bisa mencarinya di kolom pencarian.",
                                "Setelah itu anda akan melihat fasilitas apa saja yang venue tersebut sajikan."
                            ]}
                        />
                    </div>
                ) : (
                    <div className="w-full mx-10">
                        <PanduanCard
                            title="Cara mengelola data pengguna"
                            steps={[
                                "Masuk ke halaman admin.",
                                "Pilih menu 'Kelola Pengguna'.",
                                "Edit atau hapus pengguna sesuai kebutuhan."
                            ]}
                        />
                        <PanduanCard
                            title="Menambah atau Menghapus Venue"
                            steps={[
                                "Pergi ke halaman Venue.",
                                "Tambahkan venue baru atau hapus venue yang sudah tidak aktif.",
                                "Pastikan semua informasi sudah benar sebelum menyimpan."
                            ]}
                        />
                        <PanduanCard
                            title="Melihat Laporan"
                            steps={[
                                "Pergi ke halaman laporan.",
                                "Lihat statistik pengguna dan performa venue.",
                                "Analisa data untuk meningkatkan layanan."
                            ]}
                        />
                    </div>
                )}
            </div>
        </MainLayout>
    );
  }

export default PanduanPage;
