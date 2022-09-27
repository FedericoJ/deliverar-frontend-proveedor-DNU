import * as Yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { Stack, TextField, Box, Grid, Card, Link, Container, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import moment from 'moment';

// components
import Page from '../components/Page';

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

const myFunction = () => {
  document.getElementById('demo').innerHTML = 'Hello World';
  console.log('You clicked submit.');
};

// ----------------------------------------------------------------------

export default function Percentil() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  let peso = '';
  let altura = '';
  let fecControl = '';
  const nombreHijo = localStorage.getItem('nombreHijo');
  const control = JSON.parse(localStorage.getItem('controles'));
  if (control.length !== 0) {
    peso = control[0].peso;
    altura = control[0].altura;
    fecControl = moment(control[0].fecControl).format('YYYY-MM-DD');
  }

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper'
  };

  const [age, setAge] = React.useState('');

  const [gender, setgender] = React.useState('');

  const handleChange = (event) => {
    setgender(event.target.value);
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fecControl,
      peso,
      altura
    },
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyle title="Percentil  | Child-Hub">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4" gutterBottom>
            Consulta de Percentiles de {nombreHijo}
          </Typography>
          <Typography variant="h7">Datos del ultimo control:</Typography>
        </Box>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              id="date"
              type="date"
              label="Fecha de Control"
              InputLabelProps={{
                shrink: true
              }}
              {...getFieldProps('fecControl')}
              error={Boolean(touched.fecControl && errors.fecControl)}
              helperText={touched.fecControl && errors.fecControl}
            />

            <TextField
              label="Peso (Kg)"
              {...getFieldProps('peso')}
              error={Boolean(touched.peso && errors.peso)}
              helperText={touched.peso && errors.peso}
            />
            <TextField
              label="Altura (metros)"
              {...getFieldProps('altura')}
              error={Boolean(touched.altura && errors.altura)}
              helperText={touched.altura && errors.altura}
            />
            {/* <ClickAwayListener onClickAway={handleClickAway}> */}
            <Button variant="outlined" color="primary" onClick={handleClick}>
              Ver Percentil ▼
            </Button>
            {/* </ClickAwayListener> */}
          </Stack>
          <Grid item xs={12} sm={12} md={12} align="left">
            <Box sx={{ position: 'relative' }}>
              {open ? (
                <Box sx={styles}>
                  <img
                    alt="bebe"
                    src="/static/illustrations/PercentilPesoMasculino.jpg"
                    width="100%"
                    height="100%"
                  />
                  <img
                    alt="bebe"
                    src="/static/illustrations/PercentilPesoFemenino.jpg"
                    width="100%"
                    height="100%"
                  />
                  <img
                    alt="bebe"
                    src="/static/illustrations/PercentilEstaturaMasculino.jpg"
                    width="100%"
                    height="100%"
                  />
                  <img
                    alt="bebe"
                    src="/static/illustrations/PercentilEstaturaFemenino.jpg"
                    width="100%"
                    height="100%"
                  />
                </Box>
              ) : null}
            </Box>
          </Grid>
        </Stack>
      </Container>
    </RootStyle>
  );
}
