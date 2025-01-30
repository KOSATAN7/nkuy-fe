import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaUser, FaStar, FaRegStar } from "react-icons/fa";

interface VenueProps {
  venue: {
    name: string;
    description: string;
    capacity: number;
    location: { city: string; address: string };
    images: string[];
    reviews: { name: string; rating: number; comment: string }[];
  };
}

const DetailVenueCard: React.FC<VenueProps> = ({ venue }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 rounded-xl mt-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <img
          src={venue.images[0]}
          alt="Venue"
          className="w-full lg:w-1/2 h-80 object-cover rounded-xl"
        />

        <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{venue.name}</h1>
          <p className="text-gray-600 text-lg mt-4">{venue.description}</p>

          <div className="mt-8">
            <span className="block w-16 h-1 bg-gray-800"></span>
            <p className="text-gray-800 font-medium mt-4">
              Kapasitas {venue.capacity} orang
            </p>
          </div>

          <div className="flex items-center mt-8">
            <CiHeart className="w-8 h-8 text-gray-500 hover:text-blue-500 cursor-pointer mr-52" />
            <button className="px-8 py-3 bg-primary1 text-white font-semibold rounded-lg">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
        {venue.images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-32 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="relative w-full h-64 mt-16 rounded-lg overflow-hidden">
        <img
          src="/src/assets/5.png"
          alt="Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 rounded-lg p-4 w-72 bg-white">
          <h2 className="text-lg font-bold text-gray-800">
            {venue.location.city}
          </h2>
          <p className="text-sm text-gray-600">{venue.location.address}</p>
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-2xl font-semibold text-black text-center">
          Ulasan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {venue.reviews.map((review, index) => (
            <div
              key={index}
              className="border border-black rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                  <FaUser className="w-6 h-6 text-primary1" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center text-black">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < review.rating ? (
                        <FaStar key={i} className="fill-current" />
                      ) : (
                        <FaRegStar key={i} className="fill-current" />
                      )
                    )}
                    <span className="text-gray-600 text-sm ml-6">
                      Coffe Toffe
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-black text-lg mb-2">
                {review.name}
              </h3>

              <p className="text-base text-black mb-4 line-clamp-3">
                {review.comment}
              </p>

              <a
                href="#"
                className="text-blue-500 font-semibold text-sm flex items-center"
              >
                Baca Selengkapnya →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 border border-black rounded-xl mt-16 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-12 text-start">
              Berikan Saran dan Kritik Anda!
            </h2>
            <span className="block w-10 h-1 bg-gray-800 mt-10 mb-10"></span>
            <h2 className="text-1xl font-semibold text-gray-800 text-start">Ulasan</h2>
            <textarea
              className="w-4/5 p-4 border border-black rounded-lg text-gray-600 focus:outline-none"
              placeholder="Tulis ulasan Anda di sini..."
              rows={5}
            ></textarea>
            <p className="text-gray-700 text-sm mt-4">
              Seberapa puas Anda dengan cafe ini?
            </p>

            <div className="flex items-center mt-2 space-x-1">
            <FaStar className="fill-current" />
            <FaStar className="fill-current" />
            <FaStar className="fill-current" />
            <FaRegStar className="fill-current" />
            <FaRegStar className="fill-current" />
            </div>

            <div className="mt-6 text-left">
              <button className="px-6 py-3 bg-primary1 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Kirim Ulasan
              </button>
            </div>
          </div>
          <img
            src={venue.images[0]}
            alt="Review"
            className="rounded-lg object-cover w-full h-full flex "
          />
        </div>
      </div>
    </div>
  );
};

export default DetailVenueCard;
