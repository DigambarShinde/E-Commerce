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
import bg from "./img/signin.svg";
import bgimg from "./img/backimg.jpg";

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
  uploadInput: {
    display: "none",
  },
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Handle form submission
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
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
          Failed! Enter correct username and password.
        </Alert>
      </Snackbar>
      <div style={styles.mainContainer}>
        <Box sx={styles.boxContainer}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  margin: "40px 15px",
                  height: "63vh",
                  color: "#f5f5f5",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                          <FormControl fullWidth required>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                              labelId="role-label"
                              id="role"
                              value={role}
                              label="Role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <MenuItem value={"Job Seeker"}>
                                Job Seeker
                              </MenuItem>
                              <MenuItem value={"Recruiter"}>
                                Recruiter
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="skills"
                            label="Skills"
                            name="skills"
                            autoComplete="skills"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="bio"
                            label="Bio"
                            name="bio"
                            multiline
                            rows={4}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl fullWidth required>
                            <InputLabel id="working-status-label">
                              Working Status
                            </InputLabel>
                            <Select
                              labelId="working-status-label"
                              id="working-status"
                              value={workingStatus}
                              label="Working Status"
                              onChange={(e) =>
                                setWorkingStatus(e.target.value)
                              }
                            >
                              <MenuItem value={"Fresher"}>Fresher</MenuItem>
                              <MenuItem value={"Experienced"}>
                                Experienced
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        {workingStatus === "Experienced" && (
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              id="experience"
                              label="Years of Experience"
                              name="experience"
                              type="number"
                              value={experienceYears}
                              onChange={(e) =>
                                setExperienceYears(e.target.value)
                              }
                              inputProps={{ min: "0" }}
                            />
                          </Grid>
                        )}
                        <Grid item xs={12}>
                          <Tooltip title="Upload your resume (PDF only)">
                            <Button
                              variant="contained"
                              component="label"
                              fullWidth
                              size="large"
                              sx={styles.button}
                            >
                              Upload Resume
                              <input
                                type="file"
                                hidden
                                accept=".pdf"
                                style={styles.uploadInput}
                              />
                            </Button>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={12}>
                          <Tooltip title="Upload your profile picture (JPEG/PNG)">
                            <Button
                              variant="contained"
                              component="label"
                              fullWidth
                              size="large"
                              sx={styles.button}
                            >
                              Upload Image
                              <input
                                type="file"
                                hidden
                                accept=".jpg,.jpeg,.png"
                                style={styles.uploadInput}
                              />
                            </Button>
                          </Tooltip>
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
                            Already have an Account?{" "}
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
