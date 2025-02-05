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
  fasilitas: string[];
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
  pivot: [
    venue_id: number,
    pertandingan_id: number
  ]
} 
