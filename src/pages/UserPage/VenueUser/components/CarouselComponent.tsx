import { Box, Typography, Rating } from "@mui/material";
import Carousel from "react-material-ui-carousel";

type Venue = {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
};

const CarouselComponent = ({ venues }: { venues: Venue[] }) => {
  const venuesCarousel = venues.slice(0, 5);

  const reorderArray = (arr: Venue[], currentIndex: number) => {
    return arr.map((_, i) => {
      const newIndex = (currentIndex + i) % arr.length;
      return arr[newIndex];
    });
  };

  console.log(venuesCarousel);

  return (
    <Box p={4}>
      <Carousel navButtonsAlwaysVisible indicators={false} animation="slide">
        {venuesCarousel.map((venue, index) => {
          const reorderedArray = reorderArray(venuesCarousel, index);
          return (
            <div key={venue.id} className="w-full flex gap-2 items-center">
              {reorderedArray.map((reordered_venue, reordered_index) => (
                <div
                  key={reordered_venue.id}
                  className={`${reordered_index !== Math.floor(reorderedArray.length / 2)
                    ? reordered_index % 2 !== 0
                      ? "scale-90"
                      : "scale-[.8]"
                    : "mx-8"
                    }`}
                >
                  <div
                    className={`${reordered_index !== Math.floor(reorderedArray.length / 2) ? "blur-[2px]" : ""}`}
                  >
                    {/* Gambar */}
                    <img
                      className="rounded-lg"
                      src={reordered_venue.image}
                      alt={reordered_venue.name}
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                    {/* Detail Tempat */}
                    <div className="w-full flex mt-2 justify-between ">
                      <div>
                        <Typography variant="h6">
                          {reordered_venue.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {reordered_venue.location}
                        </Typography>
                      </div>
                      {/* MUI Rating */}
                      <div className="mt-[2px]">
                        <Rating
                          value={reordered_venue.rating}
                          precision={0.5} // Mendukung setengah bintang
                          readOnly // Mengunci rating agar hanya untuk tampilan
                          sx={{
                            color: "#FFD700", // Warna bintang
                            fontSize: "1.5rem",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
