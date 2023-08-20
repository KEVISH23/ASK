import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'

const BeforeAppbar = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"#254061"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontStyle:"bold"}}>
            ASK
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default BeforeAppbar