import React, { useState, useEffect, useContext } from "react";
import { Product } from "../components";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = ({products}) => {
  console.log(products)
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { showCart, setShowCart, totalQuantities, } = useStateContext();
  const items = products;
  console.log(items)
  const filteredItems =
    searchQuery.trim() !== ""
      ? items?.filter((item) => {
          const itemName = item?.name ? item?.name.toLowerCase() : "";
          const itemDescription = item?.details
            ? item.details.toLowerCase()
            : "";
          const itemCategory = item.category ? item.category.toLowerCase() : "";
          const searchQueryLowerCase = searchQuery
            .toLowerCase()
            .replace(" ", "-");

          return (
            itemName.includes(searchQueryLowerCase) ||
            itemDescription.includes(searchQueryLowerCase) ||
            itemCategory.includes(searchQueryLowerCase.replace("-", " "))
          );
        })
      : [];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);

    handleClose();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <p className="logo">
          <Link href="/">
            <Image
              src="/project-logo-small.png"
              alt="Site Logo"
              width={75}
              height={75}
            />
          </Link>
        </p>
      </div>

      <div className="button-container">
        <div className="nav-links">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/shop" className="nav-link">
            Shop
          </Link>
          <Link href="/contact/ContactPage" className="nav-link">
            Contact
          </Link>
        </div>
        <button type="button" className="search-icon" onClick={handleOpen}>
          <AiOutlineSearch />
        </button>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
      <Modal open={open} onClose={handleClose}>
        <div className="modal-search">
          <form onSubmit={handleSearch}>
            <input
              className="searchBar"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              float="left"
            />
            <IconButton
              onClick={handleClose}
              sx={{
                position: "relative",
                marginLeft: "6%",
              }}
            >
              <CloseIcon />
            </IconButton>
          </form>
          <div className="search-results">
            <Box width="100%">
              <Box width="100%" maxWidth="1260px" margin="80px auto">
                <Typography
                  variant="h3"
                  textAlign="center"
                  padding="20px"
                ></Typography>
                <Box
                  margin="0 auto"
                  display="grid"
                  gridTemplateColumns="repeat(auto-fill, 300px)"
                  justifyContent="space-around"
                  rowGap="20px"
                  columnGap="1.33%"
                  onClick={handleClose}
                >
                  {filteredItems &&
                    filteredItems.length > 0 &&
                    filteredItems.map((item) => (
                      <Product key={item._id} product={item} />
                    ))}
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
