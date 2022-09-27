import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium'
};

const image = {
  height: 55,
  my: 4
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          ¿QUÉ TE OFRECEMOS?
        </Typography>
        <div>
          <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/illustrations/vacuna3.png"
                  alt="suitcase"
                  sx={{ height: 90 }}
                />
                <Typography variant="h6" sx={{ my: 4 }}>
                  Vacunas
                </Typography>
                <Typography variant="h5" align="center">
                  Enterate cuales son las vacunas vigentes, registralas y mantené al dia la libreta
                  sanitaria virtual.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/illustrations/control.png"
                  alt="graph"
                  sx={{ height: 80 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Control
                </Typography>
                <Typography variant="h5" align="center">
                  Guardá todos los controles medicos que le hagas a tu familia y consultalos cuando
                  quieras.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/static/illustrations/chart.png"
                  alt="clock"
                  sx={{ height: 80 }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Percentil
                </Typography>
                <Typography variant="h5" align="center">
                  ¿Está creciendo bien tu bebé? ¿Tiene suficiente peso? ¿Su altura es normal?
                  Consulta la tabla de percentiles para saber como está tu hijo.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductValues;
