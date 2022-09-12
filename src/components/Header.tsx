import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align='center'  component="div" sx={{ flexGrow: 1 }}>
              Patient | Add New
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;