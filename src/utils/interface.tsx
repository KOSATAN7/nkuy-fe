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

export interface SuperAdminVenue {
  userName: string;
  
}
