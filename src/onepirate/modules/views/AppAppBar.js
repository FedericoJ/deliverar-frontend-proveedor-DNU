import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Box
            component="img"
            src="/static/illustrations/child-hub.png"
            alt="suitcase"
            sx={{ height: 75 }}
          />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h4"
              underline="none"
              component={RouterLink}
              to="/Login"
              sx={{ ...rightLink, color: 'black' }}
            >
              Ingresar
            </Link>
            <Link
              variant="h4"
              underline="none"
              component={RouterLink}
              to="/Register"
              sx={{ ...rightLink, color: '#2ECC71' }}
            >
              Registrate
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
