import MainLayout from "../LandingPage/Layout";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const KontakPage: React.FC = () => {
    return (
        <MainLayout>
            <div className="py-10 px-5 mt-12 mb-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                    {/* Bagian Kiri - Info Kontak */}
                    <div className=" p-8 rounded-lg w-full md:w-1/3 text-left">
                        <h3 className="text-2xl font-bold mb-8">Hubungi Kami !</h3>

                        <div className="flex flex-col gap-6 items-start justify-center">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-2xl text-blue-500" />
                                <div>
                                    <h4 className="font-bold">Alamat</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-2xl text-blue-500" />
                                <div>
                                    <h4 className="font-bold">No. Telepon</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-2xl text-blue-500" />
                                <div>
                                    <h4 className="font-bold">E-Mail</h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-t pt-4">
                                <FaClock className="text-2xl text-blue-500" />
                                <div>
                                    <h4 className="font-bold">Jam Kerja</h4>
                                    <p className="text-gray-600">07.00 - 21.00 WIB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bagian Kanan - Formulir Kontak */}
                    <div className="bg-white shadow-xl p-8 rounded-lg w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-6 text-center">KIRIM PESAN</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="Nama lengkap..."
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Alamat E-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="Email anda..."
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                    No. Telepon
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="08XXXXXXXXXX"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium mb-1">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="Pesan..."
                                ></textarea>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 w-full"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default KontakPage;