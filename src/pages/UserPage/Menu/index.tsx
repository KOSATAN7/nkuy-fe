import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import StepperComponent from "./components/Stepper";
import MenuCard from "./components/MenuCard";
import Cart from "./components/Cart";
import {
  BiLeftArrowCircle,
  BiSearch,
  BiSolidDownArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortBy, setSortBy] = useState<"lowToHigh" | "highToLow" | null>(null);
  const [cartItems] = useState([
    { name: "Spagetti", quantity: 2, price: 55000 },
    { name: "Pizza", quantity: 1, price: 90000 },
    { name: "Dimsum", quantity: 1, price: 15000 },
  ]);
  const isSortByOpen = Boolean(anchorEl);

  const MenuData = [
    {
      name: "Coffe Latte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 25,
      images: ["/src/assets/Coffe Latte.jpg"],
    },
    {
      name: "Croffle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 30,
      images: ["/src/assets/Croffle.jpg"],
    },
    {
      name: "Cinnamon Roll",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 30,
      images: ["/src/assets/Cinnamon Roll.jpg"],
    },
    {
      name: "Beef Bowl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 40,
      images: ["/src/assets/Beef Bowl.jpg"],
    },
    {
      name: "Potato Wedges",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 50,
      images: ["/src/assets/Potato Wedges.jpg"],
    },
    {
      name: "Smoothies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 30,
      images: ["/src/assets/Smoothies.jpg"],
    },
    {
      name: "Spagetti",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 55,
      images: ["/src/assets/Spagetti.png"],
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 90,
      images: ["/src/assets/Pizza.jpg"],
    },
    {
      name: "Donat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 10,
      images: ["/src/assets/Donat.jpg"],
    },
    {
      name: "Dimsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 15,
      images: ["/src/assets/Dimsum.jpg"],
    },
    {
      name: "Nasi Goreng",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 27,
      images: ["/src/assets/Nasi Goreng.jpg"],
    },
    {
      name: "Pecel Madiun",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 16,
      images: ["/src/assets/Pecel Madiun.jpg"],
    },
    {
      name: "Pisang Goreng",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 20,
      images: ["/src/assets/Pisang Goreng.jpg"],
    },
    {
      name: "Roti Bakar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 20,
      images: ["/src/assets/Roti Bakar.jpg"],
    },
    {
      name: "Onion Ring",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 40,
      images: ["/src/assets/Onion Ring.jpg"],
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSortByClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortByClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (sortType: "lowToHigh" | "highToLow") => {
    setSortBy(sortType);
    handleSortByClose();
  };

  const filteredMenuData = MenuData.filter((menu) =>
    menu.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMenuData = [...filteredMenuData].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.harga - b.harga;
    } else if (sortBy === "highToLow") {
      return b.harga - a.harga;
    } else {
      return 0;
    }
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="m-20">
        <div className="flex justify-center items-center">
          <Stack sx={{ width: "100%" }} spacing={4}>
            <StepperComponent activeStep={0} />
          </Stack>
        </div>

        <div className="flex items-center cursor-pointer ml-10 mt-8">
          <BiLeftArrowCircle className="mr-2 text-2xl" />
          <span className="text-lg">Kembali</span>
        </div>

        <div className="flex justify-between items-center ml-10 mt-8">
          <div className="w-72 p-2 border rounded-lg border-gray-300 justify-between flex items-center">
            <input
              type="text"
              placeholder="Cari Menu..."
              className="text-lg text-gray-500 outline-none flex-1"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <BiSearch className="text-xl text-black" />
          </div>

          <div className="w-36">
            <Button
              className="p-2 border rounded-lg border-gray-300 justify-between flex items-center cursor-pointer w-full"
              sx={{
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                textTransform: "none",
                color: "black",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:active": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={handleSortByClick}
            >
              <h3 className="text-black">Urutkan</h3>
              {isSortByOpen ? (
                <BiSolidUpArrow className="text-lg text-black" />
              ) : (
                <BiSolidDownArrow className="text-lg text-black" />
              )}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={isSortByOpen}
              onClose={handleSortByClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => handleSort("lowToHigh")}>
                Rendah ke Tinggi
              </MenuItem>
              <MenuItem onClick={() => handleSort("highToLow")}>
                Tinggi ke Rendah
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex ml-10 py-8 items-start">
          <div className="grid grid-cols-3 gap-4 flex-1">
            {sortedMenuData.map((menu) => (
              <MenuCard key={menu.name} venue={menu} />
            ))}
          </div>

          <div
            className="w-1/4 ml-8 sticky top-8"
            style={{ alignSelf: "flex-start" }}
          >
            <Cart items={cartItems} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
