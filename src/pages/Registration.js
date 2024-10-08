import React, { useState, forwardRef } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
  Container,
  Avatar,
  Snackbar,
  Slide,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  ThemeProvider,
  createTheme,
  Tooltip,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import bgimg from "./img/backimg.jpg";
import axios from "axios";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const styles = {
  mainContainer: {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    height: "100vh",
    color: "#f5f5f5",
  },
  boxContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    maxWidth: "1200px",
    height: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
  },
  formContainer: {
    backgroundSize: "cover",
    height: "100%",
    padding: "20px",
    backgroundColor: "#3b33d5",
  },
  avatar: {
    bgcolor: "#ffffff",
    margin: "0 auto",
  },
  headerText: {
    mt: 2,
  },
  button: {
    mt: "15px",
    borderRadius: 28,
    color: "#ffffff",
    backgroundColor: "#FF9A01",
  },
  linkText: {
    color: "#beb4fb",
    cursor: "pointer",
  },
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();

    // Ensure the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare the data to send to the backend
    const userData = {
      firstName,
      lastName,
      email,
      number,
      password,
      role,
    };

    try 
    {
      // Example of sending a POST request to the backend
      const response = await axios.post("/api/register", userData);

      if (response.status === 200) 
      {
        // Handle successful registration (e.g., navigate to login page)
        alert("Registration successful!");
        navigate("/login");
      }
      else 
      {
        // Handle any other status codes
        alert("Registration failed. Please try again.");
      }
    } 
    catch (error) 
    {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) 
  {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Registration failed! Please check your details.
        </Alert>
      </Snackbar>
      <div style={styles.mainContainer}>
        <Box sx={styles.boxContainer}>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={styles.formContainer}>
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box sx={{ mb: 3 }}>
                      <Avatar sx={styles.avatar}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        sx={styles.headerText}
                      >
                        Create Account
                      </Typography>
                    </Box>
                    <Box component="form" noValidate onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="name"
                            label="Username"
                            name="name"
                            autoComplete="name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="number"
                            label="Phone Number"
                            name="number"
                            autoComplete="number"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="confirm-password"
                            label="Confirm Password"
                            name="confirm-password"
                            type="password"
                            autoComplete="confirm-password"
                            onChange={(e) =>
                              setConfirmPassword(e.target.value)
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth required>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                              labelId="role-label"
                              id="role"
                              value={role}
                              label="Role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <MenuItem value={"USER"}>User</MenuItem>
                              <MenuItem value={"ADMIN"}>Admin</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={styles.button}
                          >
                            Register
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body1"
                            align="center"
                            sx={{ mt: 2 }}
                          >
                            Already have an account?{" "}
                            <span
                              style={styles.linkText}
                              onClick={() => navigate("/login")}
                            >
                              Sign In
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
