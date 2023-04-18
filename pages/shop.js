import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Product from "../components/Product";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { client } from "../lib/client";
const shop = ({products}) => {
  console.log(products)
  const [category, setCategory] = useState('All');
  const breakPoint = useMediaQuery("(min-width:600px)");

  const tshirts = products.filter((item) =>
    item?.productType === "T shirt"
  );

  const sealife = tshirts.filter((item) =>
    item?.category === "sealife"
  );

  const birds = tshirts.filter((item) =>
    item?.category === "birds"
  );

  const projectForMor = tshirts.filter((item) =>
    item?.category=== "pfm"
  );

  const barrelLids = products.filter((item) =>
    item?.productType === "barrelLid"
  );

  const handleChangeCategory = (event, newValue) => {
    setCategory(newValue);
  };



  return (<Box width="80%" margin="100px auto">
  {breakPoint ? (
    <Typography variant="h3" textAlign="center">
      <b> T-Shirts</b>
    </Typography>
  ) : (
    <Typography variant="h3" textAlign="center">
      <b> T-Shirts</b>
    </Typography>
  )}
  <Box>
    {breakPoint ? (
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={category}
        onChange={handleChangeCategory}
        centered
        TabIndicatorProps={{ sx: { display: "block" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="All" />
        <Tab label="Sealife" value="Sealife" />
        <Tab label="Project For Mor" value="PFM" />
        <Tab label="birds" value="Birds" />
      </Tabs>
    ) : (
      <Box sx={{ margin: "25px" }}>
        <Select
          labelId="category-label"
          id="category-select"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
            console.log(event.target.value);
          }}
          label="Category"
          displayEmpty
          sx={{ width: "100%" }}
        >
          <MenuItem value="" disabled>
            Select category
          </MenuItem>
          <MenuItem value="All" sx={{ width: "100%" }}>
            All
          </MenuItem>
          <MenuItem value="Sealife">Sealife</MenuItem>
          <MenuItem value="Birds">Birds</MenuItem>
          <MenuItem value="PFM">Project For Mor</MenuItem>
        </Select>
      </Box>
    )}
    <Box
      margin="50px auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      justifyContent="space-around"
      rowGap="20px"
      columnGap="1.33%"
    >
      {category === "All"
        ? tshirts.map((item) => (
          <Product key={item._id} product={item} />
          ))
        : category === "Sealife"
        ? sealife.map((item) => (
            <Product key={item._id} product={item} />
          ))
        : category === "Birds"
        ? birds.map((item) => (
            <Product key={item._id} product={item} />
          ))
        : projectForMor.map((item) => (
            <Product key={item._id} product={item} />
          ))}
    </Box>
  </Box>
  {breakPoint ? (
    <Typography variant="h3" padding="20px" textAlign="center">
      <b> Etched Barrel Lids</b>
    </Typography>
  ) : (
    <Typography variant="h3" padding="20px" textAlign="center">
      <b> Etched Barrel Lids</b>
    </Typography>
  )}
  <Box
    margin="0 auto"
    display="grid"
    gridTemplateColumns="repeat(auto-fill, 300px)"
    justifyContent="space-around"
    rowGap="20px"
    columnGap="2%"
  >
    {barrelLids.map((item) => (
      <Product key={item._id} product={item} />
    ))}
  </Box>
</Box>
);
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  console.log(products); // add this line to log the fetched products data
  
  return {
    props: {products},
  };
};

export default shop