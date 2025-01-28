import MainLayout from "../LandingPage/Layout";
import PanduanCard from "./components/PanduanCard";

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
