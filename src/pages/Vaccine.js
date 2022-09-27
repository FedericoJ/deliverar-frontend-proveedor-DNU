import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Card, Link, Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
// import { RegisterForm } from '../components/authentication/register';
import { RegisterChildForm } from '../components/_dashboard/register-child';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '60%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  margin: theme.spacing(0, 0, 10, 5)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'left',
  padding: theme.spacing(0, 0)
}));

const onDownload = () => {
  const link = document.createElement('a');
  link.download = `CalendarioVacunacion.jpg`;
  link.href = '/static/illustrations/CalendarioVacunacion.jpg';
  link.click();
};

// ----------------------------------------------------------------------

export default function Vaccine() {
  return (
    <RootStyle title="Calendario Vacunación  | Child-Hub">
      <Container maxWidth="xl">
        <Grid item xs={12} sm={12} md={12}>
          <img
            alt="Calendario"
            src="/static/illustrations/CalendarioVacunacion.jpg"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} align="right">
          <Button variant="outlined" color="primary" onClick={onDownload}>
            Descargar Calendario
          </Button>
        </Grid>
      </Container>
    </RootStyle>
  );
}
