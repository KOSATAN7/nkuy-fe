export const formatRupiah = (angka: number) => {
  return `Rp ${angka.toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};
