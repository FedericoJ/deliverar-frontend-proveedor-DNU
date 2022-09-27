import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#D0ECE7',
              py: 8,
              px: 3
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h3" component="h3" gutterBottom>
                Recibí todas las Novedades
              </Typography>
              <Typography variant="h5">
                Mantenete al tanto de las actualizaciones en Child-Hub
              </Typography>
              <TextField
                noBorder
                placeholder="Ingresá tu mail"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button type="submit" color="secondary" variant="contained" sx={{ width: '100%' }}>
                SUSCRIBIRME
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)'
            }}
          />
          <Box
            component="img"
            src="https://www.educaciontrespuntocero.com/wp-content/uploads/2021/05/familias-destacada-978x652.jpg.webp"
            alt="familia"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="Te enviaremos novedades de nuestro servicio"
      />
    </Container>
  );
}

export default ProductCTA;
