import React, { useState,useEffect } from "react";
import loading from '../../assets/loading screen/loading_gif.gif'
import { fetchAdminProfile} from '../services/adminServices'
import {
  Typography,
  Paper,
  Container,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const theme = createTheme();

const paperStyle = {
  display: "inline-block",
  padding: "10px",
  marginLeft: "10px",
}
const typographySX = {
  fontWeight: "bold",
  display: "inline-block",
  width: "150px",
}

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = sessionStorage.getItem("userid");
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const userData = await fetchAdminProfile(id, token);
        setAdminProfile(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>
      <img src={loading} alt="Loading"></img>
    </div>;
  }

  if (!adminProfile) {
    return <div>Error: Unable to fetch user profile.</div>;
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />

    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bank Manager Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              square
              sx={{ padding: "20px", marginBottom: "20px" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                Manager Information
              </Typography>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Account Number:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.customerId}
                </Paper>
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Gender:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.gender}
                </Paper>
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Account Type:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.dateOfBirth}
                </Paper>
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Credit Limit:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.phoneNumber}
                </Paper>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              square
              sx={{ padding: "20px", marginBottom: "20px" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                Personal Information
              </Typography>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  First Name:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle }}
                >
                  {adminProfile.firstName}
                </Paper>
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Last Name:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.lastName}
                </Paper>
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  sx={{...typographySX}}
                >
                  Email:
                </Typography>
                <Paper
                  elevation={0}
                  square
                  style={{...paperStyle}}
                >
                  {adminProfile.email}
                </Paper>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Button
              startIcon={<EditIcon />}
              variant="outlined"
              color="primary"
              onClick={()=>{
                console.log("editing");
              }}
            >
              Edit Account Details
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  </ThemeProvider>
  );
};

export default AdminProfile;

