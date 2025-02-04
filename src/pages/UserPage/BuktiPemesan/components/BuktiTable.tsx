import { formatRupiah } from "@/utils/FormatRupiah";
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from "@mui/material";

interface Row {
  name: string;
  banyak: number;
  harga: number;
  jumlah: number;
}

interface BuktiTableProps {
  rows: Row[];
  total: number;
}

const BuktiTable = ({ rows, total }: BuktiTableProps) => {
  return (
    <TableContainer component={Paper} className="border border-gray-300 rounded-lg p-6 m-7 mx-12" style={{ maxWidth: "fit-content" }}>
      <Table size="small" style={{ tableLayout: "fixed", width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell align="left" className="font-bold text-sm" style={{ width: "40%" }}>Deskripsi</TableCell>
            <TableCell align="right" className="font-bold text-sm" style={{ width: "20%" }}>Harga</TableCell>
            <TableCell align="center" className="font-bold text-sm" style={{ width: "20%" }}>Banyak</TableCell>
            <TableCell align="right" className="font-bold text-sm" style={{ width: "20%" }}>Jumlah</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left" className="text-sm">{row.name}</TableCell>
              <TableCell align="right" className="text-sm">{formatRupiah(row.harga)}</TableCell>
              <TableCell align="center" className="text-sm">x {row.banyak}</TableCell>
              <TableCell align="right" className="text-sm">{formatRupiah(row.jumlah)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingTop: "32px", paddingRight: "16px" }}>
        <h2 className="font-semibold text-base" style={{ margin: 0, marginRight: "7rem" }}>Total :</h2>
        <h2 className="text-base" style={{ margin: 0 }}>{formatRupiah(total)}</h2>
      </div>
    </TableContainer>
  );
};

export default BuktiTable;