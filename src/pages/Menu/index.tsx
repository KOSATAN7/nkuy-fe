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
  const isSortByOpen = Boolean(anchorEl);

  const MenuData = [
    {
      name: "Spagetti",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 50,
      images: ["/src/assets/spagetti.png"],
    },
    {
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 80,
      images: ["/src/assets/pizza.jpg"],
    },
    {
      name: "Kawa-Kawa Hijau",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 80,
      images: ["/src/assets/kajo.jpg"],
    },
    {
      name: "Donat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 50,
      images: ["/src/assets/donat.jpg"],
    },
    {
      name: "Nasi Goreng",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 80,
      images: ["/src/assets/nasi goreng.jpeg"],
    },
    {
      name: "Dimsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      harga: 80,
      images: ["/src/assets/dimsum.jpg"],
    },
    {
        name: "Pecel Madiun",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        harga: 50,
        images: ["/src/assets/pecel madiun.jpg"],
      },
      {
        name: "Intisari",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        harga: 80,
        images: ["/src/assets/intisari.jpg"],
      },
      {
        name: "Pink Lady",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        harga: 80,
        images: ["/src/assets/pink lady.jpg"],
      },
  ];

  const cartItems = [
    { name: "Spagetti", quantity: 2, price: 20000 },
    { name: "Pizza", quantity: 1, price: 80000 },
    { name: "Kawa-Kawa Hijau", quantity: 1, price: 95000 },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredMenuData = MenuData.filter((menu) =>
    menu.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSortByClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortByClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
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
              <h3 className="text-black">Sort By</h3>
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
              <MenuItem onClick={handleSortByClose}>Option 1</MenuItem>
              <MenuItem onClick={handleSortByClose}>Option 2</MenuItem>
              <MenuItem onClick={handleSortByClose}>Option 3</MenuItem>
            </Menu>
          </div>
        </div>

        <div
          className="flex ml-10 py-8 items-start"
          style={{ height: "calc(100vh - 300px)" }}
        >
          <div
            className="grid grid-cols-3 gap-4 flex-1 "
            style={{ overflowY: "auto", maxHeight: "100%" }}
          >
            {filteredMenuData.map((menu) => (
              <MenuCard key={menu.name} venue={menu} />
            ))}
          </div>

          <div
            className="w-1/4 ml-8"
            style={{ overflowY: "auto", maxHeight: "100%" }}
          >
            <Cart items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
