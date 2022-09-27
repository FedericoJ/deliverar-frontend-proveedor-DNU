import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
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
  height: 120,
  my: 4
};

function ProductHowItWorks() {
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
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          ¿QUIÉNES SOMOS?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Federico Romero</Box>
                <Box
                  component="img"
                  src="/static/illustrations/fede.png"
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  27 años, Workday Integration Consultant en Kainos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Germán Mainero</Box>
                <Box
                  component="img"
                  src="/static/illustrations/german.png"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  31 años, Scrum Master en Galicia Seguros
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>Martín Vázquez</Box>
                <Box
                  component="img"
                  src="/static/illustrations/tincho.png"
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  28 años, Senior Consultant en Charles Taylor
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button> */}
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
