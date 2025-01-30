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

const PanduanPage = () => {
  const steps = [
    {
      title: "Langkah Pertama",
      description:
        'Buka halaman beranda, Klik tombol "Beranda" di atas atau Klik logo Nobar Kuy!',
    },
    {
      title: "Langkah Kedua",
      description: "Cari tayangan yang anda inginkan di kolom pencarian.",
    },
    {
      title: "Langkah Ketiga",
      description:
        'Pilih tayangan yang ingin anda tonton lalu, Klik tombol "Lihat Venue".',
    },
    {
      title: "Langkah Empat",
      description:
        'Pilih venue yang ingin anda tuju, lalu Klik tombol "Detail Venue". (anda harus login terlebih dahulu)',
    },
    {
      title: "Langkah Lima",
      description:
        "Anda akan diarahkan ke halaman login, silahkan masukkan username dan password.",
    },
    {
      title: "Langkah Enam",
      description:
        'Apabila anda belum memiliki akun, anda dapat meng-Klik tombol "Daftar"',
    },
    {
      title: "Langkah Tujuh",
      description:
        'Anda akan dialihkan ke halaman pendaftaran, silahkan masukan data diri anda."',
    },
    {
      title: "Langkah Depalan",
      description:
        "Setelah anda berhasil membuat akun, anda dapat kembali ke beranda.",
    },
    {
      title: "Langkah Sembilan",
      description:
        "Setelah memilih tayangan tersebut, lalu Klik tombol “Lihat Venue”",
    },
    {
      title: "Langkah Sepuluh",
      description: "Anda dapat memilih tempat menonton sesuai keinginan anda.",
    },
    {
      title: "Langkah Sebelas",
      description:
        "Setelah memilih tempat tersebut, lalu Klik tombol “Detail Venue”",
    },
    {
      title: "Langkah DuaBelas",
      description:
        "Anda akan dialihkan ke halaman Detail Venue, anda dapat melihat detail tempat yang dipilih.",
    },
    {
      title: "Langkah TigaBelas",
      description:
        "Setelah itu anda klik tombol “Pesan Sekarang”, anda akan dialihkan ke halaman menu",
    },
    {
      title: "Langkah EmpatBelas",
      description:
        "Anda dapat melihat makanan yang tersedia di venue tersebut.",
    },
    {
      title: "Langkah LimaBelas",
      description:
        "Pilih makanan dan tambahkan pesanan. (*minimal pembelian 50K, *wajib pesan)",
    },
    {
      title: "Langkah EnamBelas",
      description:
        "Setelah anda menghadiri acara tersebut, login ke akun anda, lalu pilih tempat yang anda kunjungi tersebut.",
    },
    {
      title: "Langkah TujuhBelas",
      description:
        "Lalu, berikan ulasan atau penilaian tentang tempat anda yang kunjungi tersebut.",
    },
    {
      title: "Langkah DepalanBelas",
      description: "Kirimkan ulasan anda, agar membantu pengguna lain.",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center px-6 py-10">
        <div className="w-full max-w-5xl">
          <h1 className="font-bold text-2xl text-center mb-2 mt-10">
            Anda Bingung Untuk Menonton?
          </h1>
          <p className="font-semibold text-1xl text-center mb-20">
            Mari Ikuti langkah berikut!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {steps.map((step, index) => (
              <div key={index}>
                <PanduanCard
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PanduanPage;
