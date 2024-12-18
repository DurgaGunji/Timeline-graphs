
import React, { useState } from 'react';
import { Box, Avatar, Typography, Button, Tabs, Tab, AppBar } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import './PatientProfile.css'; // Optional CSS file for custom styles
//import TimelineChart from './TimelineChart'; // Import the TimelineChart component
import Chart from "./Chart";  // No need for extension unless required


const PatientProfile = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Patient Profile Section */}
      <Box className="patient-details" sx={{ display: "flex", alignItems: "center", padding: 2 }}>
        <Avatar
          className="patient-avatar"
          alt="Patient Avatar"
        />
        <Box className="patient-info" sx={{ marginLeft: 2 }}>
          {/* Patient Info */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
              <Typography variant="body2" className="info-label">Patient ID</Typography>
              <Typography variant="body1" className="info-value">#577478</Typography>
            </Box>
          </Box>

          {/* Patient Name */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
              <Typography variant="body2" className="info-label">Name</Typography>
              <Typography variant="h6" className="info-value">Jabvo Jones</Typography>
            </Box>
          </Box>

          {/* Additional Info */}
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
              <Typography variant="body2" className="info-label">Age</Typography>
              <Typography variant="body1" className="info-value">25</Typography>
            </Box>
          </Box>
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
              <Typography variant="body2" className="info-label">Contact</Typography>
              <Typography variant="body1" className="info-value">+91 7788994561</Typography>
            </Box>
          </Box>
          <Box className="info-row" sx={{ display: 'flex', alignItems: 'center', borderRight: '1px solid aliceblue', paddingRight: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 1 }}>
              <Typography variant="body2" className="info-label">Email</Typography>
              <Typography variant="body1" className="info-value">debra.holt@example.com</Typography>
            </Box>
          </Box>
          <Box className="info-row">
            <Typography variant="body2" className="info-label">Address</Typography>
            <Typography variant="body1" className="info-value">321 Central Street. Mexico City 01150,</Typography>
            <Typography variant="body1" className="info-value">Mexico</Typography>
          </Box>
        </Box>

        {/* Edit Button */}
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginTop: 2, color: "white", backgroundColor: "#ddd", borderRadius: "10px" }}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </Box>

      {/* Section for Tabs */}
      <Box sx={{ marginTop: 3 }}>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // Align tabs to the left
              width: '100%', // Ensure the tabs stretch across the full width
            }}
            TabIndicatorProps={{
              style: { background: '#1976d2' }, // Blue underline for active tab
            }}
          >
            <Tab
              label="Appointment History"
              sx={{
                color: tabValue === 0 ? '#1976d2' : 'black', // Blue text for active tab
                '&.Mui-selected': { color: '#1976d2' }, // Blue text when the tab is selected
              }}
            />
            <Tab
              label="Treatment History"
              sx={{
                color: tabValue === 1 ? '#1976d2' : 'black', // Blue text for active tab
                '&.Mui-selected': { color: '#1976d2' }, // Blue text when the tab is selected
              }}
            />
            <Tab
              label="Timeline"
              sx={{
                color: tabValue === 2 ? '#1976d2' : 'black', // Blue text for active tab
                '&.Mui-selected': { color: '#1976d2' }, // Blue text when the tab is selected
              }}
            />
          </Tabs>
        </AppBar>

        {/* Render TimelineChart when Timeline tab is selected */}
        {tabValue === 2 && <Chart />}
        {tabValue === 1 && <Chart />}
        {tabValue === 0 && <Chart />}
      </Box>
    </Box>
  );
};

export default PatientProfile;

