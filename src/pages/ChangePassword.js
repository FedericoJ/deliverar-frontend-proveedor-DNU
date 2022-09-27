import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { ChangePasswordForm } from '../components/authentication/change-password';
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

export default function ChangePassword() {
  return (
    <RootStyle title="Cambio de Contraseña | Child-Hub">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography align="center" variant="h2" sx={{ px: 5, mt: 10, mb: 15 }}>
            Recupero de usuario
          </Typography>
          <img alt="register" src="/static/illustrations/changePassword1.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h3" gutterBottom align="center">
              Cambiá tu contraseña
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <ChangePasswordForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
