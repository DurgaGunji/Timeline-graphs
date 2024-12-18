
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PatientProfile from "./PatientProfile";
//import TimelineChart from "./Charts";
//import Chart from "./Chart";

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" ,width:"auto"}}>
      {/* Sidebar */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

      {/* Main content container */}
      <Box
        sx={{
          flexGrow: 1, // Ensures the container takes available space
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width:"auto",
        }}
      >
        {/* Navbar */}
        <Navbar isDrawerOpen={isDrawerOpen} />

        {/* Patient Profile Section */}
        {/* <Box sx={{ flexGrow: 6, p: 2, overflowY: "auto" ,width:"auto"}}> */}
        <Box>
          < PatientProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;


