import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(6, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Registrate | Child-Hub">
      <AuthLayout>
        ¿Ya estás registrado? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Ingresar
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography align="center" variant="h2" sx={{ px: 5, mt: 10, mb: 5 }}>
            Crea tu cuenta
          </Typography>
          <img alt="register" src="/static/illustrations/4.jpg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" gutterBottom align="center">
              Completá tus datos
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Al registrarse, usted acepta los&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Terminos de Servicios
            </Link>
            &nbsp;y la&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Politica de Privacidad&nbsp;
            </Link>
            de Child-Hub.
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
