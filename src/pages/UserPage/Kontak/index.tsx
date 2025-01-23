import MainLayout from "../LandingPage/Layout";
import React from "react";
import { FaMapMarkerAlt, FaClock, FaHeadset } from "react-icons/fa";

const truncateText = (text: string, maxWords: number): string => {
    const words = text.split(" ");
    return words.length > maxWords ? words.slice(0, maxWords).join(" ") + "..." : text;
};

const KontakPage: React.FC = () => {
    return (
        <MainLayout>
            <div className="py-10 px-5 mt-20">
                {/* Header Section */}
                <h2 className="text-3xl font-bold text-center mb-8">Kontak Kami</h2>

                {/* Info Cards */}
                <div className="flex items-center justify-center text-center gap-20 mt-28">
                    <div className="text-3xl font-bold text-left">
                        <p className="normal-case">Hubungi</p>
                        <p className="normal-case">Kami</p>
                    </div>

                    <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-6 flex flex-col text-left">
                        <FaMapMarkerAlt className="text-3xl text-black-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Lokasi Offline</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {truncateText("Lorem Ipsum is simply dummy text that might be longer than twenty words for demonstration purposes.", 4)}
                        </p>
                        <a href="#" className="text-blue-500 font-semibold">
                            Lebih lanjut &rarr;
                        </a>
                    </div>
                    <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-6 flex flex-col text-left">
                        <FaClock className="text-3xl text-black-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Jam Kerja</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {truncateText("Lorem Ipsum is simply dummy text that might be longer than twenty words for demonstration purposes.", 4)}
                        </p>
                        <a href="#" className="text-blue-500 font-semibold">
                            Lebih lanjut &rarr;
                        </a>
                    </div>
                    <div className="bg-white shadow-xl border border-gray-200 rounded-xl p-6 flex flex-col text-left">
                        <FaHeadset className="text-3xl text-black-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Komunikasi</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {truncateText("Lorem Ipsum is simply dummy text that might be longer than twenty words for demonstration purposes.", 4)}
                        </p>
                        <a href="#" className="text-blue-500 font-semibold">
                            Lebih lanjut &rarr;
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-32 mt-32 px-5">
                <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-2/3 flex flex-col md:flex-row gap-8">
                    {/* Form Bagian Kiri */}
                    <div className="bg-primary1 text-white p-6 rounded-md w-full md:w-1/2">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    Masukkan nama lengkap anda
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="Nama lengkap anda..."
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                    No. Telp
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="08XXXXXXXXXX"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    Masukkan email anda
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-md text-black"
                                    placeholder="Email anda..."
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
                            <button
                                type="submit"
                                className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Bagian Kanan */}
                    <div className="w-full md:w-1/2 text-center md:text-left justify-center mt-32">
                        <p className="text-gray-600 mb-2">Memiliki pertanyaan?</p>
                        <h2 className="text-3xl font-bold text-gray-800">Kontak Kami!</h2>
                        <p className="text-gray-600 mt-2">
                            Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default KontakPage;
