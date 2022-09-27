// material
import { Link, Box, Grid, Container, Typography } from '@material-ui/core';
// components
import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import {
  CardAgregarHijo,
  CardVacunas,
  CardHijos,
  CardPercentiles
} from '../components/_dashboard/Inicio';
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const nombre = localStorage.getItem('nombre');

  return (
    <Page title="Principal | Child-Hub">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h3">
            ¡Bienvenido, <b> {nombre} </b>
          </Typography>
          <Typography variant="h7">¿Cómo podemos ayudarte?</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Link
              style={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/dashboard/registerChild"
            >
              <CardAgregarHijo />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/dashboard/vaccine">
              <CardVacunas />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/dashboard/mychild">
              <CardHijos />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
