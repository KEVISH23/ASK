import { Box, Button, Stack, TextField } from '@mui/material'
import React from 'react'
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import BeforeAppbar from './BeforeAppbar'

const Login = () => {
  return (
    <>
    <BeforeAppbar/>
      <Stack direction={{
        lg: "row",
        md: "row",
        sm: "row",
        xs: "column"
      }}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}>
        <Box sx={
          {
            width: {
              lg: "40%"
            }
          }
        }>
          <img style={{ width: "100%" }} src="./images/Mobile login-amico.png" alt="image" />
        </Box>
        <Stack direction="column">
          <Box>

            <h1 style={{ color: "#254061" }}>
              <LoginRoundedIcon sx={{ color: "#254061" }} fontSize="large" />
              Login Here</h1>
          </Box>
          <Stack direction="column" spacing={2}>
            <TextField
              required
              label="Email Id"
              variant="standard"
              sx={{color:"#254061"}}
              />

            <TextField
              sx={{color:"#254061"}}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <Stack direction="row" spacing={2}>
            <Button variant="outlined">LogIn</Button>
            <Button variant="outlined">Reset</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Login