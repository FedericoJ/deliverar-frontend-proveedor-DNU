import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark'
  }
};

const LANGUAGES = [
  {
    code: 'es-ES',
    name: 'Español'
  },
  {
    code: 'un-EN',
    name: 'English'
  }
];

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: 'flex', bgcolor: 'secondary.light' }}>
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                {/* <Box component="a" href="https://mui.com/" sx={iconStyle}>
                  <img src="/static/themes/onepirate/appFooterFacebook.png" alt="Facebook" />
                </Box>
                <Box component="a" href="https://twitter.com/MaterialUI" sx={iconStyle}>
                  <img src="/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
                </Box> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legales
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/" color="#17202A">
                  Terminos
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/" color="#17202A">
                  Privacidad
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4} />
          {/* <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Lenguaje
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid> */}
          <Grid item>
            <Typography variant="h7" align="right">
              Copyright © 2021 Child-Hub Servicios de Salud
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
