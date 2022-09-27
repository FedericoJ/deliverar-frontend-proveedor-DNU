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
  CardEditarHijo,
  CardPercentil,
  CardControles,
  CardVacunas
} from '../components/_dashboard/start-child';
import Page from '../components/Page';

import { BuscarHijo } from '../controllers/hijoController';
import {
  buscarControlesPorHijo,
  buscarRelacionVacunaPorHijo
} from '../controllers/controlesPediatricosController';
// ----------------------------------------------------------------------

export default function DashboardChild() {
  const nombreHijo = localStorage.getItem('nombreHijo');

  const traerHijo = async function () {
    const postTraerHijo = await BuscarHijo();

    if (postTraerHijo.rdo === 1) {
      alert(postTraerHijo.mensaje);
    }
  };
  React.useState(() => traerHijo());

  const buscarControles = async function (values) {
    const postBuscarCon = await buscarControlesPorHijo(values);

    if (postBuscarCon.rdo === 1) {
      alert(postBuscarCon.mensaje);
    }
  };
  const controles = React.useState(() => buscarControles());

  const buscarVacunas = async function (values) {
    const postBuscarVacu = await buscarRelacionVacunaPorHijo(values);

    if (postBuscarVacu.rdo === 1) {
      alert(postBuscarVacu.mensaje);
    }
  };
  const vacunas = React.useState(() => buscarVacunas());
  console.log('vacunas', vacunas);

  return (
    <Page title="Hijo | Child-Hub">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h3">
            <b>{nombreHijo}</b>
          </Typography>
          {/* <Typography variant="h7">¿Cómo podemos ayudarte?</Typography> */}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Link
              style={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/dashboard/editChild"
            >
              <CardEditarHijo />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Link
              style={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/dashboard/checkVaccines"
            >
              <CardVacunas />
            </Link>
          </Grid>
          <Grid item xs={0} sm={3} md={3} />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <Link
              style={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/dashboard/checkControls"
            >
              <CardControles />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Link
              style={{ textDecoration: 'none' }}
              component={RouterLink}
              to="/dashboard/percentil"
            >
              <CardPercentil />
            </Link>
          </Grid>
          <Grid item xs={0} sm={3} md={3} />
        </Grid>
      </Container>
    </Page>
  );
}
