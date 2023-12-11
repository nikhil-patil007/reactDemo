import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function LoginPage() {

  const clickMe = ()=>{
    return
  }

  return (

    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          background:'white',
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login Page
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="standard"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
                <Link to='/register'> Don't have an account? Sign Up </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}