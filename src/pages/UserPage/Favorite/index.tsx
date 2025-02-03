import MainLayout from "../LandingPage/Layout";
import React, { useState } from "react";
import { useFavorite } from "../Favorite/components/FavoriteContext";
import VenueCardPortrait from "../VenueUser/components/VenueCardLanscape";
import { useNavigate } from "react-router-dom";

const FavoriteVenue: React.FC = () => {
    const { favorites } = useFavorite();
    const navigate = useNavigate();

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Hitung jumlah halaman
    const totalPages = Math.ceil(favorites.length / itemsPerPage);

    // Data yang akan ditampilkan di halaman saat ini
    const currentFavorites = favorites.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <MainLayout>
            <div className="p-6">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 text-primary-500 bg-primary-100 hover:bg-primary-200 "
                >
                    ← Kembali
                </button>

                <h2 className="text-2xl font-semibold mb-4">Venue Favorit</h2>

                {favorites.length === 0 ? (
                    <p>Tidak ada venue favorit.</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {currentFavorites.map((venue) => (
                                <VenueCardPortrait key={venue.id} venue={venue} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center mt-6 space-x-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                            >
                                ← Previous
                            </button>

                            <span className="text-lg font-medium">
                                Halaman {currentPage} dari {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next →
                            </button>
                        </div>
                    </>
                )}
            </div>
        </MainLayout>
    );
};

export default FavoriteVenue;
