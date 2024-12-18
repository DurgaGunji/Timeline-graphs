import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // Calendar Icon

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false); // Toggle search bar visibility on mobile
  const [anchorEl, setAnchorEl] = useState(null); // For profile menu dropdown

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen); // Toggle search bar visibility
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "black",
            display: { xs: "block", md: "block" }, // Always visible
          }}
        >
          Patient Profile
        </Typography>

        {/* Search Section (Only visible on mobile view when search is open) */}
        <Box
          sx={{
            display: { xs: searchOpen ? "flex" : "none", md: "none" }, // Only show on mobile (xs) when searchOpen is true
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: 5,
            p: 0.5,
            flexGrow: 1,
          }}
        >
          <SearchIcon sx={{ color: "black", ml: 2 }} />
          <InputBase
            placeholder="Search for anything here.."
            sx={{
              ml: 2,
              mr: 15,
              color: "black",
              backgroundColor: "#f0f0f0",
            }}
          />
        </Box>

        {/* Search Icon Button (Visible only on mobile and when searchOpen is false) */}
        <Box sx={{ display: { xs: searchOpen ? "none" : "flex", md: "none" } }}>
          <IconButton onClick={toggleSearch}>
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>

        {/* Search Section (Always visible on desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Always show search bar on medium and larger screens
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: 5,
            p: 0.5,
            flexGrow: 1,
          }}
        >
          <SearchIcon sx={{ color: "black", ml: 2 }} />
          <InputBase
            placeholder="Search for anything here.."
            sx={{
              ml: 2,
              mr: 15,
              color: "black",
              backgroundColor: "#f0f0f0",
            }}
          />
        </Box>

        {/* Appointment Button */}
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundColor: "blue",
            alignItems: "center",
            borderRadius: "15px",
          }}
        >
          <CalendarMonthIcon sx={{ mr: 1 }} /> {/* Icon on the left */}
          Book Appointment
        </Button>

        {/* Notifications */}
        <Box sx={{ position: "relative", display: { xs: "none", md: "inline-flex" } }}>
          <Badge
            badgeContent={2}
            color="error"
            sx={{
              "& .MuiBadge-badge": {
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                fontSize: "12px",
              },
            }}
          >
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Badge>
        </Box>

        {/* Profile Section */}
        <Box>
          <IconButton onClick={handleProfileMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



