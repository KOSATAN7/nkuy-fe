export interface Register {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface Pertandingan {
  id: number;
  cabang_olahraga: string;
  liga: string;
  tim_tuan_rumah: string;
  logo_tuan_rumah: string;
  tim_tamu: string;
  logo_tamu: string;
  tanggal_pertandingan: string;
  waktu_pertandingan: string;
  status_pertandingan: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface MatchCardData {
  id: number;
  image: string;
  day: string;
  date: string;
  title: string;
  time: string;
  description: string;
}

export interface Venue {
  id: number;
  nama: string;
  alamat: string;
  kontak: string;
  kota: string;
  fasilitas: string | string[];
  status: string;
  kapasitas: number;
  foto_utama: string;
  foto_foto: string[];
  video: string;
}

export interface BuatVenue {
  username: string;
  email: string;
  password: string;
  nama: string;
  alamat: string;
  kapasitas: number;
  fasilitas: string[];
  kota: string;
  kontak: string;
  foto_utama: string;
  foto_foto: string[];
  video: string;
  latitude: string;
  longitude: string;
}

export interface BuatPertandingan {
  cabang_olahraga: string;
  liga: string;
  tim_tuan_rumah: string;
  logo_tuan_rumah: string;
  tim_tamu: string;
  logo_tamu: string;
  tanggal_pertandingan: string;
  waktu_pertandingan: string;
}

export interface UbahVenue {
  nama: string;
  alamat: string;
  kapasitas: number;
  fasilitas: string[];
  kota: string;
  kontak: string;
  // foto_utama: string;
  // foto_foto: string[];
  // video: string;
  latitude: string;
  longitude: string;
}

export interface KelolaUser {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateUser {
  username: string;
  email: string;
  password: string;
}

export interface getMetodePembayarans {
  id: number;
  nama: string;
  deskripsi: string;
  status: string;
}

export interface Konten {
  id: number;
  cabang_olahraga: string;
  liga: string;
  tim_tuan_rumah: string;
  logo_tuan_rumah: string;
  tim_tamu: string;
  logo_tamu: string;
  tanggal_pertandingan: string;
  waktu_pertandingan: string;
  status_pertandingan: string;
  status: string;
  created_at: string;
  updated_at: string;
  pivot: [venue_id: number, pertandingan_id: number];
}

export interface Menu {
  status: string;
  kesediaan: string;
  id: number;
  nama: string;
  deskripsi: string;
  harga: string;
  foto: string;
  kategori: string;
}

export interface buatMenu {
  nama: string;
  kategori: string;
  harga: string;
  deskripsi: string;
  foto: string;
}

export interface MetodePembayaran {
  metode_pembayaran_id: number;
  metode_pembayaran: string;
}

export interface Provider {
  id: number;
  nama: string;
  no_rek: string;
  penerima: string;
  deskripsi: string;
  foto: string;
  status: string;
}

export interface PaymentData {
  metode_pembayaran: MetodePembayaran;
  provider: Provider;
}

export interface ListMetode {
  id: number;
  nama: string;
  deskripsi: string;
  status: string;
}

export interface buatProvider {
  metode_pembayaran_id: number;
  nama: string;
  no_rek: string;
  penerima: string;
  deskripsi: string;
  foto: string;
}

export interface MenuKanjut {
  id: number;
  nama: string;
  deskripsi: string;
  harga: string;
  foto: string;
  kategori: string;
  kesediaan: string;
}

export interface buatBooking {
  provider_id: string;
  venue_id: string;
  jumlah_orang: number;
  menu_pesanan: [
    id: number,
    jumlah: number
  ];
  bukti_pembayaran: string

}
