import {TextField,Grid,Box,Typography,Container} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API from "./HelperFile";

export default function SignUpPage() {

  console.log("VITE_APP_API_URL Line no 10",import.meta.env.VITE_APP_API_URL)
  
  const objData = {
    email :'',
    username :'',
    password :'',
    cpassword :'',
  }
  
  const [value,setValue]= useState(objData);
  const [loading,setLoading] = useState(false)
  const {email,username,password,cpassword} = value;

  const handleOnChange = (name,data) =>{
    setValue({
      ...value,[name]:data
    })
  } 

  // console.log('Host Url---->')

  const handleOnSubmit =()=>{
    if(password !== cpassword){
      console.log('Error not Same')
      return 
    }
    const data = value;
    setLoading(true)
    axios.post(`${API()}/api/register_user`,data).then((response)=>{
      console.log('response',response)
      if(response.status === 200){
        setLoading(false)
        console.log('Register successfull');
      }
    }).catch((error)=>{
      setLoading(false)
      console.log('Error',error);
    })
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
          Sign Up
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={username}
            onChange={(event)=>handleOnChange('username',event.target.value)}
            label="Username"
            autoFocus
            variant="standard"
            />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            value={email}
            onChange={(event)=>handleOnChange('email',event.target.value)}
            variant="standard"
            />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            value={password}
            onChange={(event)=>handleOnChange('password',event.target.value)}
            type="password"
            variant="standard"
            />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            value={cpassword}
            onChange={(event)=>handleOnChange('cpassword',event.target.value)}
            variant="standard"
          />
          
          <LoadingButton
            type="submit"
            loading={loading}
            onClick={handleOnSubmit}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
                <Link to='/login'>You have an account? Login </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}