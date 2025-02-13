import { useParams } from "react-router-dom";
import MainLayout from "../LandingPage/Layout";
import { useEffect, useState } from "react";
import { MenuKanjut } from "@/utils/interface";
import { getListMenuTersedia, postBooking } from "@/service/index";
import MenuCard from "./components/MenuCard";
import { formatRupiah } from "@/utils/FormatRupiah";
import TextField from "@/components/Field/TextField";
import UploadField from "@/components/Field/UploadField";
import SelectField from "@/components/Field/SelectField";
import { getProvider } from "@/service/index";
import CustomButton from "@/components/Button/CustomButton";

interface CartItem {
  id: number;
  jumlah: number;
}

const MenuPage = () => {
  const { venueId } = useParams<{ venueId: string }>();
  const [menuData, setMenuData] = useState<MenuKanjut[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [selectedNoRek, setSelectedNoRek] = useState<string>("");
  const [providers, setProviders] = useState<
    { value: string; label: string; no_rek: string }[]
  >([]);
  const [jumlahOrang, setJumlahOrang] = useState<number>(1);
  const [buktiPembayaran, setBuktiPembayaran] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Mas");
      }
      const response = await getListMenuTersedia(Number(venueId), token);
      setMenuData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProviders = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Login Mas");
      }
      const response = await getProvider(Number(venueId), token);

      const formattedProviders = response.data.map((item: any) => ({
        value: item.provider.id.toString(),
        label: `${item.provider.nama} - ${item["metode-pembayaran"].metode_pembayaran}`,
        no_rek: item.provider.no_rek,
      }));

      setProviders(formattedProviders);
    };

    fetchProviders();
  }, []);

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedProvider(selectedValue);
    console.log(selectedValue);

    const selectedData = providers.find((item) => item.value === selectedValue);
    setSelectedNoRek(selectedData ? selectedData.no_rek : "");
  };

  const handleAddToCart = (id: number) => {
    console.log(`Menambahkan item dengan ID: ${id} ke dalam keranjang`);
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah + 1 } : item
        );
      } else {
        return [...prevCart, { id, jumlah: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    console.log(`Mengurangi item dengan ID: ${id} dari keranjang`);
    setCartItems((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
        )
        .filter((item) => item.jumlah > 0);
    });
  };

  const totalHarga = cartItems.reduce((total, item) => {
    const menu = menuData.find((data) => data.id === item.id);
    if (menu) {
      return total + Number(menu.harga) * item.jumlah;
    }
    return total;
  }, 0);

  const handleJumlahOrangChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJumlahOrang(Number(e.target.value));
  };

  const handleBooking = async () => {
    const token = sessionStorage.getItem("token");
    if (!token || !venueId) {
      alert("Anda harus login terlebih dahulu.");
      return;
    }
  
    const formData = new FormData();
    formData.append("provider_id", selectedProvider);
    formData.append("venue_id", venueId);
    formData.append("jumlah_orang", jumlahOrang.toString());

    cartItems.forEach((item) => {
      formData.append("menu_pesanan[]", item.id.toString());
    });
    
  
    if (buktiPembayaran) {
      formData.append("bukti_pembayaran", buktiPembayaran);
    } else {
      alert("Harap unggah bukti pembayaran terlebih dahulu.");
      return;
    }
  
    try {
      const response = await postBooking(formData, token);
      console.log("Booking berhasil:", response);
      alert("Booking berhasil!");
    } catch (error) {
      console.error("Gagal melakukan booking:", error);
      alert("Gagal melakukan booking. Silakan coba lagi.");
    }
  };
  

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {menuData.map((data) => (
            <MenuCard
              key={data.id}
              foto={`https://nobarkuy.icraftds.id/storage/${data.foto}`}
              nama={data.nama}
              deskripsi={data.deskripsi}
              harga={data.harga}
              onAddToCart={() => handleAddToCart(data.id)}
              onRemoveFromCart={() => handleRemoveFromCart(data.id)}
            />
          ))}
        </div>

        <div className="w-full lg:w-96 border-2 p-4 rounded-lg">
          <h1 className="text-lg font-semibold mb-4">Pesanan Anda</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Belum ada pesanan.</p>
          ) : (
            <>
              <ul className="space-y-3">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">
                        {menuData.find((menu) => menu.id === item.id)?.nama}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.jumlah} x{" "}
                        {formatRupiah(
                          Number(
                            menuData.find((menu) => menu.id === item.id)
                              ?.harga || 0
                          )
                        )}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {formatRupiah(
                        Number(
                          menuData.find((menu) => menu.id === item.id)?.harga ||
                            0
                        ) * item.jumlah
                      )}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t flex justify-between font-semibold text-lg">
                <p>Total Harga:</p>
                <p>{formatRupiah(totalHarga)}</p>
              </div>
            </>
          )}
          <div className="border-t-2 pt-4 mt-4 space-y-3">
            <TextField
              title="Jumlah Orang"
              type="number"
              value={jumlahOrang.toString()}
              onChange={handleJumlahOrangChange}
            />

            <UploadField
              title="Bukti Pembayaran"
              onFileChange={(file) => setBuktiPembayaran(file)}
            />

            <SelectField
              title="Metode Pembayaran"
              options={providers}
              value={selectedProvider}
              onChange={handleProviderChange}
            />

            {selectedNoRek && (
              <p className="mt-2 text-gray-700">
                No Rekening:{" "}
                <span className="font-semibold">{selectedNoRek}</span>
              </p>
            )}
            <div>
              <CustomButton label="Booking Sekarang" onClick={handleBooking} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MenuPage;
